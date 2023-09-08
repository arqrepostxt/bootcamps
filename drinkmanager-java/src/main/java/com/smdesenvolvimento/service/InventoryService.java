package com.smdesenvolvimento.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smdesenvolvimento.model.Beverage;
import com.smdesenvolvimento.repository.InventoryRepository;

@Service
public class InventoryService {

   @Autowired
  private InventoryRepository inventoryRepository;

  // find all
  public List<Beverage> findAllBeverage() {
    return inventoryRepository.findAll();
  }

  // save
  public void save(Beverage beverage) {
    inventoryRepository.save(beverage);
  }

  // find
  public Beverage find(int id) {
    return inventoryRepository.findById(id).orElse(null);
  }


  // update
  public void update(int id, Beverage editedBeverage) {
    // Retrieve the existing beverage from the database
    Beverage beverage = inventoryRepository.findById(id).orElse(null);

    if (beverage != null) {
      String name = editedBeverage.getName();
      String type = editedBeverage.getType();
      int quantity = editedBeverage.getQuantity();
      // The id should not be modified
      beverage.setName(name);
      beverage.setType(type);
      beverage.setQuantity(quantity);

      // Overwrite the existing beverage with the editedBeverage
      inventoryRepository.save(beverage);
    }

}

  // delete
  public void delete(int id) {
    Beverage beverage = inventoryRepository.findById(id).orElse(null);
    inventoryRepository.deleteById(id);

    if(beverage != null) {
      inventoryRepository.delete(beverage);
    }
    
  }
}
