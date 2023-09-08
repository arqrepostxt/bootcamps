package com.smdesenvolvimento.consoleapplication;

import java.util.Scanner;

import com.smdesenvolvimento.consoleapplication.controller.DrinkController;

public class Main {
    public static void main(String[] args) {
        DrinkController controller = new DrinkController();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Add Drink");
            System.out.println("2. Display Drinks");
            System.out.println("3. Exit");
            System.out.print("Choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume the newline

            switch (choice) {
                case 1:
                    chooseDrinkType(controller, scanner);
                    break;
                case 2:
                    controller.displayDrinks();
                    break;
                case 3:
                    System.out.println("Closing Drink Manager!");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Invalid choice");
            }
        }
    }

    private static void chooseDrinkType(DrinkController controller, Scanner scanner) {
        System.out.println("1. Coffee");
        System.out.println("2. Energy Drink");
        System.out.println("3. Other");
        System.out.println("4. Back");
        System.out.print("Choice: ");
        
        int typeChoice = scanner.nextInt();
        scanner.nextLine();  // Consume the newline
        
        switch (typeChoice) {
            case 1:
                addCoffee(controller, scanner);
                break;
            case 2:
                addEnergyDrink(controller, scanner);
                break;
            case 3:
                addOtherDrink(controller, scanner);
                break;
            case 4:
                break;
            default:
                System.out.println("Choice 1, 2, 3 or 4");
        }
    }

    private static void addCoffee(DrinkController controller, Scanner scanner) {
        System.out.print("Enter coffee name: ");
        String name = scanner.nextLine();
        System.out.print("Enter coffee description: ");
        String description = scanner.nextLine();
        controller.addCoffee(name, description);
    }

    private static void addEnergyDrink(DrinkController controller, Scanner scanner) {
        System.out.print("Enter Energy drink name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Energy drink description: ");
        String description = scanner.nextLine();
        controller.addEnergyDrink(name, description);
    }

    private static void addOtherDrink(DrinkController controller, Scanner scanner) {
        System.out.print("Enter drink name: ");
        String name = scanner.nextLine();
        System.out.print("Enter drink description: ");
        String description = scanner.nextLine();
        System.out.print("Enter drink type: ");
        String drinkType = scanner.nextLine();
        controller.addDrink(name, description, drinkType);
    }
}
