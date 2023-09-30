using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntroInterfaces.Interfaces
{
    public interface ICalculadora
    {
        int Somar(int num1, int num2){
            int soma = num1 + num2;
            return soma;
        }
        int Subtrair(int num1, int num2);
        int Multiplicar(int num1, int num2);
        double Dividir(int num1, int num2);

        double Exponenciacao(int num1, int num2)
        {
            return Math.Pow(num1, num2);
        }

    }
}