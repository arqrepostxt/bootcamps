package com.smdesenvolvimento.consoleapplication.model;

public class Drink {
    private String name;
    private String description;
    private String drinkType;

    public Drink(String name, String description, String drinkType) {
        this.name = name;
        this.description = description;
        this.drinkType = drinkType;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getDrinkType() {
        return drinkType;
    }
}
