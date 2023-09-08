package com.example.swaggerdc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.swaggerdc.model.User;
import com.example.swaggerdc.repository.UserRepository;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticateUser(String username, String password) {
        User user = userRepository.findFirstByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}
