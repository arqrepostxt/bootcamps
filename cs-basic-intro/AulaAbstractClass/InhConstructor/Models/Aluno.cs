using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InhConstructor.Models
{
    public class Aluno : Pessoa
    {
        public Aluno()
        {
            
        }
        public Aluno(string nome) : base(nome)
        {
        }

        public double Nota {get; set;}

        public override void Apresentar()
        {
            Console.WriteLine($"Olá! O meu nome é {Nome}, tenho {Idade} anos e como um aluno tenho nota {Nota}.");
        }
    }
}