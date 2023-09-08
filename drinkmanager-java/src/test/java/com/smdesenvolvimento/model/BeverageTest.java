package com.smdesenvolvimento.model;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class BeverageTest {

    @Test
    public void testBeverageConstructorAndGetters() {

        String name = "Supercafe";
        String description = "Supercafe is an imported coffee of high quality";
        String type = "Coffee";
        int quantity = 2;

        Beverage beverage = new Beverage(name, description, type, quantity);

        assertEquals(name, beverage.getName());
        assertEquals(description, beverage.getDescription());
        assertEquals(type, beverage.getType());
        assertEquals(quantity, beverage.getQuantity());
    }

    @Test
    public void testBeverageSetters() {
        Beverage beverage = new Beverage("", "", "", 0 );

        String name = "Qualicoffee";
        String description = "High quality coffee";
        String type = "Coffee";
        int quantity = 0;
        beverage.setName(name);
        beverage.setDescription(description);
        beverage.setType(type);
        beverage.setQuantity(quantity);

        // Assert
        assertEquals(name, beverage.getName());
        assertEquals(description, beverage.getDescription());
        assertEquals(type, beverage.getType());
        assertEquals(quantity, beverage.getQuantity());

    }
}