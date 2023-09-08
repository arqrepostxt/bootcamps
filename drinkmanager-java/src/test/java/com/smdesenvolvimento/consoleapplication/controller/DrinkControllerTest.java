package com.smdesenvolvimento.consoleapplication.controller;

import org.junit.Before;
import org.junit.Test;

import com.smdesenvolvimento.consoleapplication.model.Coffee;
import com.smdesenvolvimento.consoleapplication.model.Drink;
import com.smdesenvolvimento.consoleapplication.model.EnergyDrink;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DrinkControllerTest {

    private DrinkController drinkController;
    private final ByteArrayOutputStream outContent = new ByteArrayOutputStream();

    @Before
    public void setUp() {
        drinkController = new DrinkController();
        System.setOut(new PrintStream(outContent));
    }

    @Test
    public void testAddDrink() {
        drinkController.addDrink("Turborel", "Saboroso e com qualidade", "Gaseificado");
        List<Drink> drinkList = drinkController.getDrinkList();
        assertEquals(1, drinkList.size());
        Drink addedDrink = drinkList.get(0);
        assertEquals("Turborel", addedDrink.getName());
        assertEquals("Saboroso e com qualidade", addedDrink.getDescription());
        assertEquals("Gaseificado", addedDrink.getDrinkType());
    }

    @Test
    public void testAddCoffee() {
        drinkController.addCoffee("Strawstrong", "Cafe forte com morango");
        List<Drink> drinkList = drinkController.getDrinkList();
        assertEquals(1, drinkList.size());
        assertTrue(drinkList.get(0) instanceof Coffee);
    }

    @Test
    public void testAddEnergyDrink() {
        drinkController.addEnergyDrink("Grand View", "Energetico importado");
        List<Drink> drinkList = drinkController.getDrinkList();
        assertEquals(1, drinkList.size());
        assertTrue(drinkList.get(0) instanceof EnergyDrink);
    }

    @Test
    public void testDisplayDrinks() {
        drinkController.addDrink("Turborel", "Saboroso e com qualidade", "Gaseificado");
        drinkController.addCoffee("Strawstrong", "Cafe forte com morango");
        drinkController.addEnergyDrink("Grand View", "Energetico importado");

        drinkController.displayDrinks();

        String expectedOutput = "----- Drinks -----\n" +
                "Type: Gaseificado\n" +
                "Name: Turborel\n" +
                "Description: Saboroso e com qualidade\n\n" +
                "Type: Coffee\n" +
                "Name: Strawstrong\n" +
                "Description: Cafe forte com morango\n\n" +
                "Type: Energy Drink\n" +
                "Name: Grand View\n" +
                "Description: Energetico importado\n\n";

        assertEquals(expectedOutput, outContent.toString());
    }
}
