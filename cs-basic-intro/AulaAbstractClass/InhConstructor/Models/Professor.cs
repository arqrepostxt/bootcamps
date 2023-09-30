using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InhConstructor.Models
{
    public class Professor : Pessoa
    {
        public Professor(string nome) : base(nome)
        {
        }

        public decimal Salario {get; set;}

        public override void Apresentar()
        {
            Console.WriteLine($"Olá! O meu nome é {Nome}, tenho {Idade} anos e como professor tenho salário de {Salario}.");
        }
    }
}