package com.smdesenvolvimento.controller.v1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smdesenvolvimento.model.Beverage;
import com.smdesenvolvimento.service.InventoryService;

@RestController
@RequestMapping("api/v1/inventory")
public class InventoryControllerV1 {
    @Autowired
    private InventoryService inventoryService;

    @PostMapping
    public void saveBeverage(@RequestBody Beverage beverage ) {
        inventoryService.save(beverage);
    }

    @GetMapping("/beverages")
    public List<Beverage> listBeverages(){
        return inventoryService.findAllBeverage();
    }

    @GetMapping("/{id}")
    public Beverage findBeverage(
        @PathVariable int id ) {
        return inventoryService.find(id);
    }

    @PutMapping("/{id}")
    public void updateBeverage(
        @PathVariable int id, 
        @RequestBody Beverage beverage) {
        inventoryService.update(id, beverage);
    }

    @DeleteMapping("/{id}")
    public void deleteBeverage(
        @PathVariable int id
    ){
        inventoryService.delete(id);
    }


    

}
