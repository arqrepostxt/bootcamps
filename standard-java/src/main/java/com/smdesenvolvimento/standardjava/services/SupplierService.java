package com.smdesenvolvimento.standardjava.services;

import com.smdesenvolvimento.standardjava.model.Category;
import com.smdesenvolvimento.standardjava.model.Product;
import com.smdesenvolvimento.standardjava.model.Supplier;
import com.smdesenvolvimento.standardjava.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupplierService {
// CategoryRepository will save the service of CategoryService

    @Autowired
    private SupplierRepository repository;
    public void save(Supplier supplierNew) {
        Supplier supplier = new Supplier();

        supplier.setName(supplierNew.getName());
        supplier.setEmail(supplierNew.getEmail());
        supplier.setAddress(supplierNew.getAddress());
        supplier.setCity(supplierNew.getCity());
        supplier.setPhone(supplierNew.getPhone());

        repository.save(supplier);
    }

    public void update(int supplierId, Supplier supplierEdited) {
        // Retrieve the existing supplier from the database
        Supplier supplier = repository.findById(supplierId).orElse(null);

        if (supplier != null) {
            // Update the properties of the existing supplier
            supplier.setName(supplierEdited.getName());
            supplier.setEmail(supplierEdited.getEmail());
            supplier.setPhone(supplierEdited.getAddress());
            supplier.setCity(supplierEdited.getAddress());
            supplier.setAddress(supplierEdited.getAddress());

            // Save the updated supplier back to the database
            repository.save(supplier);
        }

    }

    public void delete(int supplierId) {
        // Find the supplier by ID
        Supplier supplier = repository.findById(supplierId).orElse(null);

        if (supplier != null) {
            // Delete the supplier from the database
            repository.delete(supplier);
        }
    }

    public Supplier findById(int supplierId) {
        return repository.findById(supplierId).orElse(null);
    }
}
