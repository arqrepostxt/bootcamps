package com.example.swaggerdc.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.swaggerdc.model.User;



public interface UserRepository extends JpaRepository<User, Integer>{    
	 User findFirstByUsername(String username);
}