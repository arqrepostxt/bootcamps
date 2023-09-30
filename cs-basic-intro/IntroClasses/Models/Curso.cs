using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntroClasses.Models
{
    public class Curso
    {
        public string Nome { get; set;} = string.Empty;
        public List<Pessoa> Alunos {get; set;} = new List<Pessoa>();

        public void AdicionarAluno(Pessoa aluno) 
        {
            Alunos?.Add(aluno);
        }

        public int ObterQuantidadeAlunosMatriculados()
        {
            int quantidade = Alunos.Count;
            Console.WriteLine(quantidade);
            return quantidade;
        }

        public bool RemoverAluno(Pessoa aluno)
        {
            return Alunos.Remove(aluno);
        }
        public void ListarAlunos()
        {
            Console.WriteLine($"Alunos do curso de: {Nome}");
            foreach (Pessoa aluno in Alunos)
            {
                int index = Alunos.IndexOf(aluno);
                Console.WriteLine($"Aluno Nº {index + 1} - {aluno.NomeCompleto}");
            }
        }

    }
}