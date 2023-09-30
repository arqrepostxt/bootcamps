using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntroExceptions.Models
{
    public class ExemploExcecao
    {
        public void Metodo1()
        {
            Metodo2();
        }

        public void Metodo2()
        {
            throw new Exception("Ocorreu uma excecao");
        }
    }
}