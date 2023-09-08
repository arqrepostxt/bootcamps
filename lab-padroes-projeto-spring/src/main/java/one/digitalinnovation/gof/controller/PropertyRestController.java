package one.digitalinnovation.gof.controller;

import java.util.List;
import one.digitalinnovation.gof.model.Property;
import one.digitalinnovation.gof.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * Esse {@link RestController} representa nossa <b>Facade</b>, pois abstrai toda
 * a complexidade de integrações (Banco de Dados H2 e API do ViaCEP) em uma
 * interface simples e coesa (API REST).
 *
 * @author falvojr
 */
@RestController
@RequestMapping("properties")
public class PropertyRestController {

  @Autowired
  private PropertyService propertyService;

  @GetMapping
  public ResponseEntity<Iterable<Property>> buscarTodos() {
    return ResponseEntity.ok(propertyService.buscarTodos());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Property> buscarPorId(@PathVariable Long id) {
    return ResponseEntity.ok(propertyService.buscarPorId(id));
  }

  @PostMapping
  public ResponseEntity<Property> inserir(
    @ModelAttribute Property property,
    @RequestParam("pictures") List<MultipartFile> pictures
  ) {
    property.setPictures(pictures);
    propertyService.inserir(property);
    return ResponseEntity.ok(property);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Property> atualizar(
    @PathVariable Long id,
    @RequestBody Property property
  ) {
    propertyService.atualizar(id, property);
    return ResponseEntity.ok(property);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deletar(@PathVariable Long id) {
    propertyService.deletar(id);
    return ResponseEntity.ok().build();
  }
}
