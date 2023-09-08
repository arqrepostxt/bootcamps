package com.smdesenvolvimento.adfund.dto.request

import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull

import com.smdesenvolvimento.adfund.model.Address
import com.smdesenvolvimento.adfund.model.Customer
import com.smdesenvolvimento.adfund.validation.NotDuplicate
import org.hibernate.validator.constraints.br.CPF
import java.math.BigDecimal

data class CustomerDto(
  @field:NotEmpty(message = "Invalid input") val firstName: String,
  @field:NotEmpty(message = "Invalid input") val lastName: String,
  @field:NotEmpty(message = "Invalid input")
  @field:CPF(message = "This invalid CPF")
  @field:NotDuplicate(message = "CPF already registered", fieldName = "cpf")
  val cpf: String,
  @field:NotNull(message = "Invalid input") val income: BigDecimal,
  @field:Email(message = "Invalid email")
  @field:NotEmpty(message = "Invalid input")
  @field:NotDuplicate(message = "Email already in use", fieldName = "email")
  val email: String,
  @field:NotEmpty(message = "Invalid input") val password: String,
  @field:NotEmpty(message = "Invalid input") val zipCode: String,
  @field:NotEmpty(message = "Invalid input") val street: String
) {

  fun toEntity(): Customer = Customer(
    firstName = this.firstName,
    lastName = this.lastName,
    cpf = this.cpf,
    income = this.income,
    email = this.email,
    password = this.password,
    address = Address(
      zipCode = this.zipCode,
      street = this.street
    )
  )
}