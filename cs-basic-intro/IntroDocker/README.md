# IntroDocker

Guia com base no curso "Primeiros passos com Docker" para criar um container com Docker.
O container foi nomeado como "mysql-A" e tem imagem [mysql](https://hub.docker.com/_/mysql), acessar o terminal interativo do container e criar o database aula


## Adquirir a imagem mysql no docker
docker pull mysql

## Iniciar container mysql configurando nome como mysql-A senha "Senha123", porta 3306 e executar em plano de fundo
> docker run --env MYSQL_ROOT_PASSWORD=Senha123 --name mysql-A --detach --publish 3306:3306 mysql
Detalhes do comando usado
| Comando | Descrição |
| --- | --- |
| `docker run` | Inicia um novo container com base em uma imagem. |
| `-e MYSQL_ROOT_PASSWORD=Senha123` | Define a senha do usuário root do MySQL como "Senha123" usando a variável de ambiente MYSQL_ROOT_PASSWORD. |
| `--name mysql-A` | Define o nome do container como "mysql-A". |
| `-d` | Executa o contêiner em plano de fundo(modo daemon). |
| `-p 3306:3306` | Publica o container docker na porta 3306 |

## Criando database  no container
Executar o terminal interativo(tty ) no container mysql-A
> docker exec -t mysql-A bash

Conectar ao mysql
> mysql -u root -p --protocol=tcp

A senha requisitada é "Senha123"

Criar o database aula
> CREATE DATABASE aula;

Exibir databases
> show databases;
Sair do terminal interativo
> exit
Sair do container mysql-A
> exit

## Acessando o container externamente na máquina virtual Linux

Ver informações da máquina virtual linux
> ip a

Ver informações do container mysql-A

> docker inspect mysql-A
> apt -y install mysql-client
> mysql -u root -p --protocol=tcp
> Senha123
> show databases


## Comandos para controlar o container
Comando para parar
> docker stop mysql-A

Comando para iniciar
> docker start mysql-A