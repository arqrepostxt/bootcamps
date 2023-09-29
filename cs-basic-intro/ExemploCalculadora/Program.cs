// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
using ExemploCalculadora.Models;

Calculadora calc = new Calculadora();

calc.Somar(2,2);
calc.Subtrair(50, 50);
calc.Multiplicar(10, 50);
calc.Dividir(4, 2);
calc.Potencia(2,3);
calc.RaizQuadrada(9);
Console.WriteLine("Funções trigonométricas");
calc.Seno(30); // Aproximadamente 0,5
calc.Cosseno(60); // Aproximadamente 0,5
calc.Tangente(45); // Aproximadamente 1
calc.Cosseno(30); // Aproximadamente 0,866

