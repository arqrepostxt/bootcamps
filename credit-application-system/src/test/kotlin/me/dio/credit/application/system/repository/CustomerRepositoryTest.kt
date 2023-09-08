package me.dio.credit.application.system.repository

import me.dio.credit.application.system.entity.Customer
import me.dio.credit.application.system.entity.Address
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import java.math.BigDecimal

@DataJpaTest
class CustomerRepositoryTest {
    @Autowired
    private lateinit var customerRepository: CustomerRepository

    @BeforeEach
    fun setUp() {
        customerRepository.deleteAll()
    }

    @AfterEach
    fun tearDown() {
        customerRepository.deleteAll()
    }

    @Test
    fun `should find customer by CPF`() {
        val savedCustomer = customerRepository.save(buildCustomer(cpf = "12345678901"))

        val foundCustomer = customerRepository.findByCpf(savedCustomer.cpf)

        Assertions.assertThat(foundCustomer).isNotNull
        Assertions.assertThat(foundCustomer?.id).isEqualTo(savedCustomer.id)
    }

    @Test
    fun `should find customer by email`() {
	
        val savedCustomer = customerRepository.save(buildCustomer2(email = "johndoe@test.com"))

        val foundCustomer = customerRepository.findByEmail(savedCustomer.email)

        Assertions.assertThat(foundCustomer).isNotNull
        Assertions.assertThat(foundCustomer?.id).isEqualTo(savedCustomer.id)
    }

    @Test
    fun `should not find customer by non-existent CPF`() {
        val foundCustomer = customerRepository.findByCpf("12312312300")

        Assertions.assertThat(foundCustomer).isNull()
    }

    @Test
    fun `should not find customer by non-existent email`() {
        val foundCustomer = customerRepository.findByEmail("invalidmail@test.com")

        Assertions.assertThat(foundCustomer).isNull()
    }

    private fun buildCustomer(
        firstName: String = "John",
        lastName: String = "Doe",
        cpf: String,
        email: String = "johndoe@test.com",
        income: BigDecimal = BigDecimal.valueOf(1500.0),
        password: String = "pass531",
        zipCode: String = "11920000",
        street: String = "Avenida Brasil, 123"
    ) = Customer(
        firstName = firstName,
        lastName = lastName,
        cpf = cpf,
        email = email,
        income = income,
        password = password,
        address = Address(
            zipCode = zipCode,
            street = street
        ),
    )
    private fun buildCustomer2(
        firstName: String = "John",
        lastName: String = "Doe",
        cpf: String = "12345678901",
        email: String,
        income: BigDecimal = BigDecimal.valueOf(1500.0),
        password: String = "pass531",
        zipCode: String = "11920000",
        street: String = "Avenida Brasil, 123"
    ) = Customer(
        firstName = firstName,
        lastName = lastName,
        cpf = cpf,
        email = email,
        income = income,
        password = password,
        address = Address(
            zipCode = zipCode,
            street = street
        ),
    )
}
