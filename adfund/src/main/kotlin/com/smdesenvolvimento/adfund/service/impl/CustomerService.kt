package com.smdesenvolvimento.adfund.service.impl

import com.smdesenvolvimento.adfund.model.Customer
import com.smdesenvolvimento.adfund.exception.BusinessException
import com.smdesenvolvimento.adfund.repository.CustomerRepository
import com.smdesenvolvimento.adfund.service.ICustomerService
import org.springframework.stereotype.Service

@Service
class CustomerService(
  private val customerRepository: CustomerRepository
): ICustomerService {
  override fun save(customer: Customer): Customer = this.customerRepository.save(customer)

  override fun findById(id: Long): Customer = this.customerRepository.findById(id)
    .orElseThrow{throw BusinessException("Id $id not found") }

  override fun delete(id: Long) {
    val customer: Customer = this.findById(id)
    this.customerRepository.delete(customer)
  }
}