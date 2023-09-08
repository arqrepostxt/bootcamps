package com.smdesenvolvimento.consoleapplication.view;

import java.util.List;

import com.smdesenvolvimento.consoleapplication.model.Drink;

public class DrinkView {
    public void displayDrinks(List<Drink> drinks) {
        System.out.println("----- Drinks -----");
        for (Drink drink : drinks) {
            System.out.println("Type: " + drink.getDrinkType());
            System.out.println("Name: " + drink.getName());
            System.out.println("Description: " + drink.getDescription());
            System.out.println();
        }
    }
      
}
