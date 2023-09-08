package com.example.swaggerdc.controller.v4;

import com.example.swaggerdc.config.JwtService;
import com.example.swaggerdc.model.CustomerInformation;
import com.example.swaggerdc.model.User;
import com.example.swaggerdc.repository.UserRepository;
import com.example.swaggerdc.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v4/api/customer")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerControllerV4 {

  @Autowired
  private CustomerService customerService;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtService jwtService;

  @GetMapping("/get-username")
  public String getUsernameFromToken(
      @RequestHeader("Authorization") String authorizationHeader) {
    String token = authorizationHeader.substring("Bearer ".length());
    String username = jwtService.extractUsername(token);
    return username;
  }

  @GetMapping("/profile/{username}")
  public CustomerInformation findUserProfile(@PathVariable String username) {
    return customerService.findProfileByUsername(username);
  }

  @PutMapping("/profile/{username}")
  public void updateUserProfile(
      @PathVariable String username,
      @RequestBody CustomerInformation customerInfo) {
    User user = userRepository.findFirstByUsername(username);
    int idUser = user.getId();
    customerService.updateCustomerInfo(idUser, customerInfo);
  }
}
