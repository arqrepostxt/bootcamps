package com.example.swaggerdc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.swaggerdc.model.CustomerInformation;

public interface CustomerInformationRepository extends JpaRepository<CustomerInformation, Integer> {

}
