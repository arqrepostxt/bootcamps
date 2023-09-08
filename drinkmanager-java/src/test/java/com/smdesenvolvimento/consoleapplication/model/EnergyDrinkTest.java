package com.smdesenvolvimento.consoleapplication.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import org.junit.Test;

public class EnergyDrinkTest {

    @Test
    public void testGetDrinkType() {
        EnergyDrink energyDrink = new EnergyDrink("Great Lion", "Energetico GL para quem tem bravura");
        assertEquals("Energy Drink", energyDrink.getDrinkType());
        EnergyDrink energyDrinkBlue = new EnergyDrink("Blue", "O energetico para os melhores dias");
        assertNotEquals("Coffee", energyDrinkBlue.getDrinkType());
    }
    
    @Test
    public void testGetName() {
        EnergyDrink energyDrink = new EnergyDrink("Great Lion", "Energetico GL para quem tem bravura");
        assertEquals("Great Lion", energyDrink.getName());
    }
    
    @Test
    public void testGetDescription() {
        EnergyDrink energyDrink = new EnergyDrink("Great Lion", "Energetico GL para quem tem bravura");
        assertEquals("Energetico GL para quem tem bravura", energyDrink.getDescription());
    }
}