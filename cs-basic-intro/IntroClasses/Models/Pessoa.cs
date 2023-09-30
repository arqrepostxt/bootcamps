using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntroClasses.Models
{
    public class Pessoa
    {  
        public Pessoa()
        {
            
        }
        public Pessoa(string nome, string sobrenome)
        {
            Nome = nome;
            Sobrenome = sobrenome;
        }
        private string _nome = string.Empty;
        private string _sobrenome = string.Empty;
        private int _idade;

        public string Nome
        {
            get => _nome.ToUpper();
            
            set
            {
                if (string.IsNullOrWhiteSpace(value)) 
                {
                    throw new ArgumentException("O nome não pode estar vazio");
                }

                _nome = value;
                }
        }

        public string Sobrenome
        {
            get => _sobrenome.ToUpper();
            
            set
            {
                if (string.IsNullOrWhiteSpace(value)) 
                {
                    throw new ArgumentException("O nome não pode estar vazio");
                }

                _sobrenome = value;
                }
        }

        public string NomeCompleto => $"{Nome} {Sobrenome}".ToUpper();

        public int Idade
        {
            get 
            {
                return _idade;
            }

            set
            {
                if(value < 0)
                {
                    throw new ArgumentException("A idade não pode ser menor que 0");
                }

                _idade = value;
            }
        }

        public void Apresentar ()
        {
            Console.WriteLine($"Nome: {NomeCompleto}, Idade: {Idade}");
        }
    }
}