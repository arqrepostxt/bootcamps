package one.digitalinnovation.gof.service;

import one.digitalinnovation.gof.model.Property;

/**
 * Interface that defines the <b>Strategy</b> standard in the customer domain.
 * If needed it is possible to have multiple implementations of the same interface.
 *
 * @author samuelmendespy
 */
public interface PropertyService {
  Iterable<Property> buscarTodos();

  Property buscarPorId(Long id);

  void inserir(Property property);

  void atualizar(Long id, Property property);

  void deletar(Long id);

}
