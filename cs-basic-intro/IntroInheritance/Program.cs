using System.Net.Mail;
using IntroInheritance.Models;


Aluno aluno1 = new Aluno();
aluno1.Nome = "Leo";
aluno1.Idade = 20;
aluno1.Email = "leo.aluno@escolamail";
aluno1.Nota = 8.25;

aluno1.Apresentar();


Professor professor1 = new Professor();
professor1.Nome = "Ed";
professor1.Idade = 40;
professor1.Email = "ed.professor@escolamail";
professor1.Salario = 8250.00M;

professor1.Apresentar();

