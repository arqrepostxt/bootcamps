using AplicacaoExemplo.Common.Models;

Person pessoa = new Person("John", 30);
Console.WriteLine(pessoa);

pessoa.Name = "Jane";
pessoa.Age = 26;
Console.WriteLine(pessoa);


Person ellenDeGeneres = new Person();
ellenDeGeneres.Name = "James";
ellenDeGeneres.Age = 60;
Console.WriteLine(ellenDeGeneres);