package com.smdesenvolvimento.consoleapplication.controller;

import com.smdesenvolvimento.consoleapplication.model.Coffee;
import com.smdesenvolvimento.consoleapplication.model.Drink;
import com.smdesenvolvimento.consoleapplication.model.EnergyDrink;
import com.smdesenvolvimento.consoleapplication.view.DrinkView;

import java.util.ArrayList;
import java.util.List;

public class DrinkController {
    private List<Drink> drinkList;
    private DrinkView drinkView;

    public DrinkController() {
        drinkList = new ArrayList<>();
        drinkView = new DrinkView();
    }

    public void addDrink(String name, String description, String drinkType) {
        Drink drink = new Drink(name, description, drinkType);
        drinkList.add(drink);
    }

    public void addCoffee(String name, String description) {
        Coffee coffee = new Coffee(name, description);
        drinkList.add(coffee);
    }

    public void addEnergyDrink(String name, String description) {
        EnergyDrink energyDrink = new EnergyDrink(name, description);
        drinkList.add(energyDrink);
    }
    

    public void removeDrink(Drink drink) {
        drinkList.remove(drink);
    }

    public void displayDrinks() {
        drinkView.displayDrinks(drinkList);
    }

    public List<Drink> getDrinkList() {
      return drinkList;
    }
}
