using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.VisualBasic;

namespace calculadora
{
    public class Calculadora
    {
        private List<string> listaHistorico;
        private string _data;

        public Calculadora(string data)
        {
            listaHistorico = new List<string>();
            _data = data;
        }
        public int Somar(int num1, int num2)
        {
            listaHistorico.Insert(0, $"Soma {num1} + {num2} - Data : {_data}");
            return num1 + num2;
        }

        public int Subtrair(int num1, int num2)
        {
            listaHistorico.Insert(0, $"Subtração {num1} * {num2} - Data : {_data}");
            return num1 - num2;
        }

        public int Multiplicar(int num1, int num2)
        {
            listaHistorico.Insert(0, $"Multiplicação {num1} * {num2} - Data {_data}");
            return num1 * num2;
        }

        public double Dividir(int num1, int num2)
        {
            try
            {
            listaHistorico.Insert(0, $"Divisão {num1} / {num2} - Data {_data}");
            return num1/num2;
            }
            catch (DivideByZeroException ex)
            {
                throw ex;
            }
        }

        public List<string> Historico()
        {
            // Deixa os 3 primeiros itens da lista e remove os demais
            listaHistorico.RemoveRange(3, listaHistorico.Count-3);
            return listaHistorico;
        }
        
    }   
}