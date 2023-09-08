package com.smdesenvolvimento.adfund.validation

import com.smdesenvolvimento.adfund.repository.CustomerRepository
import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext

class NotDuplicateValidator(
    private val customerRepository: CustomerRepository
) : ConstraintValidator<NotDuplicate, String> {

    private lateinit var fieldName: String

    override fun initialize(constraintAnnotation: NotDuplicate) {
        fieldName = constraintAnnotation.fieldName
    }

    override fun isValid(value: String?, context: ConstraintValidatorContext?): Boolean {
        if (value == null) {
            return true
        }
        return when (fieldName) {
            "cpf" -> {
                customerRepository.findByCpf(value) == null
            }
            "email" -> {
                customerRepository.findByEmail(value) == null
            }
            else -> true
        }
    }
}
