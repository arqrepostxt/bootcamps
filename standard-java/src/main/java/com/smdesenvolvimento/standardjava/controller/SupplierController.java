package com.smdesenvolvimento.standardjava.controller;


import com.smdesenvolvimento.standardjava.model.Category;
import com.smdesenvolvimento.standardjava.model.Supplier;
import com.smdesenvolvimento.standardjava.repository.CategoryRepository;
import com.smdesenvolvimento.standardjava.repository.SupplierRepository;
import com.smdesenvolvimento.standardjava.services.CategoryService;
import com.smdesenvolvimento.standardjava.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/suppliers")
public class SupplierController {

    // CategoryRepository will help to search on database with REST
    @Autowired
    private SupplierRepository repository;

    @Autowired
    private SupplierService service;

    // Defines GET request
    @GetMapping
    public List<Supplier> findAll(){
        return repository.findAll();

    }


    // Save supplier as New supplier
    @PostMapping
    public void save(@RequestBody Supplier supplier) {
        service.save(supplier);
    }

    // Update a category by ID
    @PutMapping("/{id}")
    public void updateSupplier(@PathVariable("id") int id, @RequestBody Supplier supplier) {
        service.update(id, supplier);
    }

    // Delete a category by ID
    @DeleteMapping("/{id}")
    public void deleteSupplier(@PathVariable("id") int id) {
        service.delete(id);
    }

    // Get category by ID
    @GetMapping("/{id}")
    public Supplier findCategoryById(@PathVariable("id") int id) { return service.findById(id); }




}
