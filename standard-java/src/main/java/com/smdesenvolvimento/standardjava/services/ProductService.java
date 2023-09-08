package com.smdesenvolvimento.standardjava.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smdesenvolvimento.standardjava.model.Product;
import com.smdesenvolvimento.standardjava.repository.ProductRepository;

@Service
public class ProductService {
    // ProductService defines values to attributes sent on POST
    @Autowired
    private ProductRepository repository;

    public void save(Product productNew) {
        Product product = new Product();

        product.setTitle(productNew.getTitle());
        product.setColor(productNew.getColor());
        product.setSize(productNew.getSize());
        product.setPrice(productNew.getPrice());
        product.setStocked(productNew.getStocked());

        product.setCategory(productNew.getCategory());
        product.setSupplier(productNew.getSupplier());

        repository.save(product);
    }


    public void update(int productId, Product productEdited) {
        // Retrieve the existing product from the database
        Product product = repository.findById(productId).orElse(null);

        if (product != null) {
            // Update the properties of the existing product
            product.setTitle(productEdited.getTitle());
            product.setColor(productEdited.getColor());
            product.setSize(productEdited.getSize());
            product.setPrice(productEdited.getPrice());
            product.setStocked(productEdited.getStocked());
            product.setCategory(productEdited.getCategory());
            product.setSupplier(productEdited.getSupplier());

            // Save the updated product back to the database
            repository.save(product);
        }

    }
    public void delete(int productId) {
        // Find the product by ID
        Product product = repository.findById(productId).orElse(null);

        if (product != null) {
            // Delete the product from the database
            repository.delete(product);
        }
    }

    public Product findById(int productId) {
        return repository.findById(productId).orElse(null);
    }

}
