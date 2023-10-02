# Intro Entity Framework
Aplicação para fixação de conteúdos para desenvolvimento de API com Entity Framework

# Recursos
- Entity Framework
- SQlite
- NET 6.0
- Beekeeper Studio


# Detalhes
> Instalação do  dotnet-ef
$ dotnet tool install --global dotnet-ef

> Adicioanr o pacote EntityFrameworkCore ao projeto
$ dotnet add package Microsoft.EntityFrameworkCore.Design

> Adicioanr Sqlite
$ dotnet add package Microsoft.EntityFrameworkCore.Sqlite

>  Altere o arquivo para desenvolvimento appSettings.Development.json
appSettings.Development.json```
{
	...
	
	"ConnectionStrings": {
		"DefaultConnection": "Data Source=teste.db"
	}
	
	...
}
```

> Gerar migrations
$ dotnet-ef migrations add CriandoTabelaContato

> Aplicar migrations
$ dotnet-ef database update