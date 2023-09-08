package com.example.swaggerdc.controller.v4;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.swaggerdc.config.JwtService;
import com.example.swaggerdc.model.User;
import com.example.swaggerdc.services.LoginService;


@RestController
@RequestMapping("v4/api/login")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginControllerV4 {
	
	@Autowired
    private LoginService loginService;

	@Autowired
	private JwtService jwtUtils;
	 
    @PostMapping
    public ResponseEntity<String> login(@RequestBody User loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

       boolean isAuthenticated = loginService.authenticateUser(username, password);
        if (isAuthenticated) {
            String token = jwtUtils.generateToken(username);
            return ResponseEntity.ok()
                    .body(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }
}
