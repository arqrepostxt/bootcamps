package com.example.swaggerdc.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "credential")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
	
    private String username;
    private String password;
    
    @OneToOne(cascade = CascadeType.ALL)
    private CustomerInformation customerInformation;
    
    public User() {}
    
    
    public CustomerInformation getCustomerInformation() {
		return customerInformation;
	}


	public void setCustomerInformation(CustomerInformation customerInformation) {
		this.customerInformation = customerInformation;
	}


	public User(String login, String password) {
        this.username = login;
        this.password = password;
    }
    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    
}