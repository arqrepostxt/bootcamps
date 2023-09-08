package com.smdesenvolvimento.adfund.validation

import jakarta.validation.Constraint
import jakarta.validation.Payload
import kotlin.annotation.AnnotationRetention.RUNTIME
import kotlin.annotation.AnnotationTarget.FIELD
import kotlin.reflect.KClass

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = [NotDuplicateValidator::class])
annotation class NotDuplicate(
    val message: String = "Value already exists",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = [],
    val fieldName: String
) {
    companion object {
        const val ATTRIBUTE_NAME = "fieldName"
    }
}
