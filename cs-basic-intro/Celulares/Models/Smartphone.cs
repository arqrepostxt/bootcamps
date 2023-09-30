using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celulares.Models
{
    public abstract class Smartphone
    {
        public string Numero = "";
        public string Modelo = "";
        public string IMEI = "";
        public int Memoria;
        public void Ligar()
        {
            Console.WriteLine("Ligando...");
        }
        
        public void ReceberLigacao()
        {
            Console.WriteLine("Recebendo Ligacao...");
        }
        public abstract void InstalarAplicativo(string nome);
       
    }
    
}