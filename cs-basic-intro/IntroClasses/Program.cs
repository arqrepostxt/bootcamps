using IntroClasses.Models;

Pessoa mickey = new Pessoa(nome: "Mickey", sobrenome: "Mouse");
Pessoa hero = new Pessoa();

hero.Nome = "Clark";
hero.Sobrenome = "Kent";
hero.Idade = 18;
// hero.Apresentar();

Pessoa hero2 = new Pessoa();
hero2.Nome = "Peter";
hero2.Sobrenome = "Parker";
hero2.Idade = 14;

Curso cursoDeLegislacao = new Curso();
cursoDeLegislacao.Nome = "Legislacao";
// cursoDeLegislacao.Alunos = new List<Pessoa>();

cursoDeLegislacao.AdicionarAluno(hero);
cursoDeLegislacao.AdicionarAluno(hero2);
cursoDeLegislacao.ObterQuantidadeAlunosMatriculados(); // 2
cursoDeLegislacao.ListarAlunos();

cursoDeLegislacao.AdicionarAluno(mickey);
cursoDeLegislacao.ObterQuantidadeAlunosMatriculados(); // 3
cursoDeLegislacao.ListarAlunos();