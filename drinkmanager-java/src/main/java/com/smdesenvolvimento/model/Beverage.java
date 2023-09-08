package com.smdesenvolvimento.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "beverage")
public class Beverage {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    private String name;
    private String description;
    private String type;
    private int quantity;

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Beverage() {}

    public Beverage(String name, String description, String type, int quantity) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.quantity = quantity;
    }

    public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
