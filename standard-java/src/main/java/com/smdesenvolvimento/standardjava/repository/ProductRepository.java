package com.smdesenvolvimento.standardjava.repository;

import java.util.List;

import com.smdesenvolvimento.standardjava.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import com.smdesenvolvimento.standardjava.model.Product;


public interface ProductRepository extends JpaRepository<Product, Integer> {

    public List<Product>findByCategory(Category category);

}