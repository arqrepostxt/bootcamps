package com.smdesenvolvimento.standardjava.repository;

import com.smdesenvolvimento.standardjava.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Integer> {
}