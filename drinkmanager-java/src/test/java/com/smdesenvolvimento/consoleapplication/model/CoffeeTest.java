package com.smdesenvolvimento.consoleapplication.model;

import static org.junit.Assert.assertEquals;
import org.junit.Test;


public class CoffeeTest {

    @Test
    public void testGetDrinkType() {
        Coffee coffee = new Coffee("Tres Amigos", "Um cafe feito por amigos");
        assertEquals("Coffee", coffee.getDrinkType());
        Coffee coffeeAstro = new Coffee("Tres Astros", "Um cafe feito por amigos");
        assertEquals("Coffee", coffeeAstro.getDrinkType());
    }
    
    @Test
    public void testGetName() {
        Coffee coffee = new Coffee("Tres Amigos", "Um cafe feito por amigos");
        assertEquals("Tres Amigos", coffee.getName());
    }
    
    @Test
    public void testGetDescription() {
        Coffee coffee = new Coffee("Tres Amigos", "Um cafe feito por amigos");
        assertEquals("Um cafe feito por amigos", coffee.getDescription());
    }
}