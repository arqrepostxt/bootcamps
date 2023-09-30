using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celulares.Models
{
    public class Nokia : Smartphone
    {
        public override void InstalarAplicativo(string nome)
        {
            Console.WriteLine($"Instalando o aplicativo {nome} para smartphone Nokia...");
        }
    }
}