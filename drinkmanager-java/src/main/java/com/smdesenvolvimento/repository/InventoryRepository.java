package com.smdesenvolvimento.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smdesenvolvimento.model.Beverage;


public interface InventoryRepository extends JpaRepository<Beverage, Integer> {
  
}
