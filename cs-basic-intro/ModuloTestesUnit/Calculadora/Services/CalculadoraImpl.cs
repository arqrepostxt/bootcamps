using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculadora.Services
{
    public class CalculadoraImpl
    {
        public int Somar(int num1, int num2)
        {
            int soma = num1 + num2; 
            return soma;
        }

        public int Subtrair(int num1, int num2)
        {
            int diferenca = num1 + num2; 
            return diferenca;
        }

        public double Multiplicacao(int num1, int num2)
        {
            int produto = num1 + num2;
            return produto;
        }

        public double Divisao(int num1, int num2)
        {
            double quociente = num1 / num2;
            return quociente;
        }

        public bool VerificarPar(int num)
        {
            return num % 2 == 0;
        }

    }
}