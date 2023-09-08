package com.example.swaggerdc.services;

import com.example.swaggerdc.model.CustomerInformation;
import com.example.swaggerdc.model.User;
import com.example.swaggerdc.repository.CustomerInformationRepository;
import com.example.swaggerdc.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private CustomerInformationRepository customerInformationRepository;

  public CustomerInformation findProfileByUsername(String username) {
    User user = userRepository.findFirstByUsername(username);
    System.out.print("FIND/Username - Encontrar cadastro do usuário");
    if (user != null) {
      return user.getCustomerInformation();
    }
    else {
      return null;
    }
  }

  public void updateCustomerInfo(int userId, CustomerInformation customerInfo) {
    User user = userRepository.findById(userId).orElse(null);
    System.out.println(
      String.format("UPDATE - Atualizar cadastro do usuário")
    );
    if (user != null) {
      CustomerInformation registeredInfo = user.getCustomerInformation();
      if (registeredInfo == null) {
        customerInfo.setId(userId);
        customerInformationRepository.save(customerInfo);
        user.setCustomerInformation(customerInfo);
        userRepository.save(user);
      } else {
        registeredInfo.setName(customerInfo.getName());
        registeredInfo.setEmail(customerInfo.getEmail());
        registeredInfo.setAddress(customerInfo.getAddress());
        customerInformationRepository.save(registeredInfo);
      }
    }
  }
}
