package com.smdesenvolvimento.adfund.service

import com.smdesenvolvimento.adfund.model.Customer

interface ICustomerService {
  fun save(customer: Customer): Customer
  fun findById(id: Long): Customer
  fun delete(id: Long)
}