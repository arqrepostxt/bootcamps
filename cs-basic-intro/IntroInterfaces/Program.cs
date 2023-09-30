using IntroInterfaces.Models;
using IntroInterfaces.Interfaces;

ICalculadora calc = new Calculadora();
int a = 2;
int b = 3;
Console.WriteLine($"O produto de {a} e {b} é {calc.Multiplicar(a,b)}.");

Console.WriteLine($"O resultado de {a} elevado a {b} é {calc.Exponenciacao(a,b)}.");
