package com.example.swaggerdc.controller.v4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.swaggerdc.model.User;
import com.example.swaggerdc.repository.UserRepository;
import com.example.swaggerdc.services.UserService;

import java.util.List;
@RestController
@RequestMapping("v4/api/users")
public class UserControllerV4 {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserService service;

    @GetMapping("/all")
    public List<User> list(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User buscarPorId(@PathVariable int id){
        return service.findById(id);
    }

    
    @PostMapping
    public void save(@RequestBody User user){
        service.save(user);
    }
    
    @PutMapping("/{id}")
    public void update(
    		@PathVariable int id, 
    		@RequestBody User user){
        service.update(id, user);
    }
    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        service.delete(id);
    }

}
