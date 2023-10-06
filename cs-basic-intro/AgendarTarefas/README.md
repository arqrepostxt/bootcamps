# AgendarTarefas

AgendarTarefas é uma solução com a aplicação C# TrilhaApiDesafio para o Desafio "Criando um Sistema e Abstraindo um Celular com POO em C#"
com o propósito de solucionar o desafio e fixar de conteúdos de C#, EntityFramework, API e .NET.

## Tecnologias
 - .NET 6
 - SQLite
 - EntityFrameworkCore
 
## Instruções

### Executar o projeto 

Com o terminal na pasta raíz "AgendarTarefas" use o comando:
> dotnet watch -p TrilhaApiDesafio/TrilhaApiDesafio.csproj run

Se o terminal está na pasta "TrilhaDesafio" use o comando:
> dotnet watch run

### Criar o banco de dados SQLite e as tabelas

Se o terminal está na pasta raíz "AgendarTarefas" use o comando:
> dotnet-ef database update -p TrilhaApiDesafio/TrilhaApiDesafio.csproj

Se o terminal está na pasta "TrilhaDesafio" use o comando:
> dotnet-ef database update


## Desafio
Para este desafio, você precisará usar seus conhecimentos adquiridos no módulo de API e Entity Framework, da trilha .NET da DIO.

## Detalhes do Desafio
Você precisa construir um sistema gerenciador de tarefas, onde você poderá cadastrar uma lista de tarefas que permitirá organizar melhor a sua rotina.

Essa lista de tarefas precisa ter um CRUD, ou seja, deverá permitir a você obter os registros, criar, salvar e deletar esses registros.

A sua aplicação deverá ser do tipo Web API ou MVC, fique a vontade para implementar a solução que achar mais adequado.

A sua classe principal, a classe de tarefa, deve ser a seguinte:

![Diagrama da classe Tarefa](diagrama.png)

Não se esqueça de gerar a sua migration para atualização no banco de dados.

## Métodos esperados
É esperado que você crie o seus métodos conforme a seguir:


**Swagger**


![Métodos Swagger](swagger.png)


**Endpoints**


| Verbo  | Endpoint                | Parâmetro | Body          |
|--------|-------------------------|-----------|---------------|
| GET    | /Tarefa/{id}            | id        | N/A           |
| PUT    | /Tarefa/{id}            | id        | Schema Tarefa |
| DELETE | /Tarefa/{id}            | id        | N/A           |
| GET    | /Tarefa/ObterTodos      | N/A       | N/A           |
| GET    | /Tarefa/ObterPorTitulo  | titulo    | N/A           |
| GET    | /Tarefa/ObterPorData    | data      | N/A           |
| GET    | /Tarefa/ObterPorStatus  | status    | N/A           |
| POST   | /Tarefa                 | N/A       | Schema Tarefa |

Esse é o schema (model) de Tarefa, utilizado para passar para os métodos que exigirem

```json
{
  "id": 0,
  "titulo": "string",
  "descricao": "string",
  "data": "2022-06-08T01:31:07.056Z",
  "status": "Pendente"
}
```


## Solução
O código está pela metade, e você deverá dar continuidade obedecendo as regras descritas acima, para que no final, tenhamos um programa funcional. Procure pela palavra comentada "TODO" no código, em seguida, implemente conforme as regras acima.
