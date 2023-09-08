package one.digitalinnovation.gof.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import one.digitalinnovation.gof.exception.IdentifierNotFoundException;
import one.digitalinnovation.gof.model.Endereco;
import one.digitalinnovation.gof.model.Property;
import one.digitalinnovation.gof.repository.EnderecoRepository;
import one.digitalinnovation.gof.repository.PropertyRepository;
import one.digitalinnovation.gof.service.PropertyService;
import one.digitalinnovation.gof.service.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * Implements the <b>Strategy</b> {@link PropertyService}, that can be
 * inject by Spring (through {@link Autowired}). With that, as this class is a
 * {@link Service}, it will be treated as a <b>Singleton</b>.
 *
 * @author samuelmendespy
 */
@Service
public class PropertyServiceImpl implements PropertyService {

  @Value("${image.storage.path}")
  private String imageServerPath;

  @Value("${image.server}")
  private String imageServerUrl;

  // Singleton: Injetar os componentes do Spring com @Autowired.
  @Autowired
  private PropertyRepository propertyRepository;

  @Autowired
  private EnderecoRepository enderecoRepository;

  @Autowired
  private ViaCepService viaCepService;

  // Strategy: Implementar os métodos definidos na interface.
  // Facade: Abstrair integrações com subsistemas, provendo uma interface simples.

  @Override
  public Iterable<Property> buscarTodos() {
    // Buscar todos os propertys.
    return propertyRepository.findAll();
  }

  @Override
  public Property buscarPorId(Long id) {
    // Buscar property por ID.
    Optional<Property> property = propertyRepository.findById(id);
    return property.orElseThrow(() ->
      new IdentifierNotFoundException("No property found with ID #" + id)
    );
  }

  @Override
  public void inserir(Property property) {
    salvarPropertyComCep(property);
    salvarPropertyComFotos(property);
    propertyRepository.save(property);
  }

  @Override
  public void atualizar(Long id, Property property) {
    // Buscar property por ID, caso exista:
    Optional<Property> propertyCadastrado = propertyRepository.findById(id);
    if (propertyCadastrado.isPresent()) {
      if (property != null) {
        salvarPropertyComCep(property);
        propertyRepository.save(property);
      } else {
        throw new IllegalArgumentException("Invalid null property.");
      }
    } else {
      throw new IdentifierNotFoundException("No property found with ID #" + id);
    }
  }

  @Override
  public void deletar(Long id) {
    // Deletar property por ID.
    propertyRepository.deleteById(id);
  }

  private void salvarPropertyComCep(Property property) {
    // Verificar se o Endereco do property já existe (pelo CEP).
    String cep = property.getEndereco().getCep();
    Endereco endereco = enderecoRepository
      .findById(cep)
      .orElseGet(() -> {
        // Caso não exista, integrar com o ViaCEP e persistir o retorno.
        Endereco novoEndereco = viaCepService.consultarCep(cep);
        enderecoRepository.save(novoEndereco);
        return novoEndereco;
      });
    property.setEndereco(endereco);
  }

  private void salvarPropertyComFotos(Property property) {
    List<MultipartFile> pictures = property.getPictures();
    if (pictures != null && !pictures.isEmpty()) {
      List<String> imageUrlList = new ArrayList<>();
      for (MultipartFile picture:pictures) {
        try {
          byte[] imageBytes = picture.getBytes();
          String imageName = UUID.randomUUID().toString() + ".jpg";
          String imagePath = imageServerPath + "\\" + imageName;

          Files.write(Paths.get(imagePath), imageBytes);

          String imageUrl = imageServerUrl + "/images/" + imageName;
          imageUrlList.add(imageUrl);
        } catch (IOException e) {
          throw new IdentifierNotFoundException("IOException in file creation");
        }
      }
      property.setImagePath(imageUrlList);
      property.setPictures(null);
    }
  }
}
