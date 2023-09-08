package com.smdesenvolvimento.standardjava.controller;


import com.smdesenvolvimento.standardjava.model.Category;
import com.smdesenvolvimento.standardjava.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smdesenvolvimento.standardjava.repository.CategoryRepository;
import com.smdesenvolvimento.standardjava.services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/categories")
public class CategoryController {

    // CategoryRepository will help to search on database with REST
    @Autowired
    private CategoryRepository repository;

    @Autowired
    private CategoryService service;

    // Defines GET request
    @GetMapping
    public List<Category> findAll(){
        return repository.findAll();

    }


    // Save category as New Category
    @PostMapping
    public void save(@RequestBody Category category) { service.save(category);}

    // Update a category by ID
    @PutMapping("/{id}")
    public void updateCategory(@PathVariable("id") int id, @RequestBody Category category) {
        service.update(id, category);
    }

    // Delete a category by ID
    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable("id") int id) {
        service.delete(id);
    }

    // Get category by ID
    @GetMapping("/{id}")
    public Category findCategoryById(@PathVariable("id") int id) { return service.findById(id); }



}
