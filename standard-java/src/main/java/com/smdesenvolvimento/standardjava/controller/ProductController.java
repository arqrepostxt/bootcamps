package com.smdesenvolvimento.standardjava.controller;

import java.util.List;

import com.smdesenvolvimento.standardjava.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smdesenvolvimento.standardjava.repository.ProductRepository;
import com.smdesenvolvimento.standardjava.model.Product;
import com.smdesenvolvimento.standardjava.services.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {


    @Autowired
    private ProductRepository repository;

    @Autowired
    private ProductService service;

    // Define GET request
    @GetMapping
    public List<Product> findAll(){
        return repository.findAll();

    }

    // Get all products in a category
    @GetMapping("/categories/{category}/products")
    public List<Product> findAll(@PathVariable("category") Category category){
        return repository.findByCategory(category);
    }

    // Save the product as New Product
    @PostMapping
    public void save(@RequestBody Product product) {
        service.save(product);
    }

    // Update a product by ID
    @PutMapping("/{id}")
    public void updateProduct(@PathVariable("id") int id, @RequestBody Product product) {
        service.update(id, product);
    }

    // Delete a product by ID
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") int id) {
        service.delete(id);
    }

    // Get product by ID
    @GetMapping("/{id}")
    public Product findProductById(@PathVariable("id") int id) { return service.findById(id); }
}
