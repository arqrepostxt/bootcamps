using IntroInterfaces.Interfaces;

namespace IntroInterfaces.Models
{
    public class Calculadora : ICalculadora
    {
        public int Somar (int num1, int num2)
        {
            return num1 + num2;
        }

        public int Subtrair(int num1, int num2)
        {
            int diferenca = num1 - num2;

            return diferenca;
        }

        public int Multiplicar(int num1, int num2)
        {
            int produto = num1 * num2;
            return produto;
        }

        public double Dividir(int num1, int num2)
        {
            double quociente = (double)num1 / num2;
            return quociente;
        }
    }
}