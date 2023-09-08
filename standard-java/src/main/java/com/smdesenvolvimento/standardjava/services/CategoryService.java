package com.smdesenvolvimento.standardjava.services;

import com.smdesenvolvimento.standardjava.model.Product;
import com.smdesenvolvimento.standardjava.model.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smdesenvolvimento.standardjava.model.Category;
import com.smdesenvolvimento.standardjava.repository.CategoryRepository;

@Service
public class CategoryService {
// CategoryRepository will save the service of CategoryService

    @Autowired
    private CategoryRepository repository;
    public void save(Category categoryNew) {
        Category category = new Category();

        category.setName(categoryNew.getName());
        category.setDescription(categoryNew.getDescription());

        repository.save(category);
    }

    public void update(int categoryId, Category categoryEdited) {
        // Retrieve the existing category from the database
        Category category = repository.findById(categoryId).orElse(null);

        if (category != null) {
            // Update the properties of the existing category
            category.setName(categoryEdited.getName());
            category.setDescription(categoryEdited.getDescription());

            // Save the updated category back to the database
            repository.save(category);
        }

    }

    public void delete(int categoryId) {
        // Find the category by ID
        Category category = repository.findById(categoryId).orElse(null);

        if (category != null) {
            // Delete the category from the database
            repository.delete(category);
        }
    }

    public Category findById(int categoryId) {
        return repository.findById(categoryId).orElse(null);
    }
}
