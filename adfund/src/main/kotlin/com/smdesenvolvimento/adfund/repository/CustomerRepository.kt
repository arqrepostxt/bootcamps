package com.smdesenvolvimento.adfund.repository

import com.smdesenvolvimento.adfund.model.Customer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CustomerRepository: JpaRepository<Customer, Long>{
    fun findByCpf(cpf: String): Customer?
    fun findByEmail(email: String): Customer?
}
