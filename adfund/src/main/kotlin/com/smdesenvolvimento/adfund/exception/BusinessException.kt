package com.smdesenvolvimento.adfund.exception

data class BusinessException(override val message: String?) : RuntimeException(message)