# swaggerdc
<pt-BR>Projeto com fins educativos com conteúdo voltado a API REST baseado no curso "Criando uma API REST Documentada com Spring Web e Swagger".</pt-BR>

# Tecnologias
- Java JDK 17
- Spring Boot
- Springdoc OpenApi +Swagger UI
- Angular ( avaiable on the server at localhost:8080/ )

# Detalhes do Projeto
- Spring Boot - Proporciona facilidade de configuração do projeto, no projeto é utilizada a versão 3.1.2.
- Java JDK 17 - A versão JDK 17 representa a versão LTS com suporte de longo prazo lançada em 2021.
- Springdoc OpenApi (inclui Swagger-UI) - A dependência springdoc-openapi-starter-webmvc-ui é uma livraria Java springdoc-openapi que possiblita a automatizar a geração de documentação de API usando Spring Boot. No projeto fica disponível uma interface em http://localhost:8080/swagger-ui/index.html/ e a versão da dependência utilizada no projeto é 2.2.0. (https://s01.oss.sonatype.org/content/groups/public/org/springdoc/springdoc-openapi-starter-webmvc-ui/)[Ver histórico de versões] 

```
<dependency>
      		<groupId>org.springdoc</groupId>
     		<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
      		<version>2.2.0</version>
   		</dependency>
```
- Angular - Um web aplicativo Angular de uma simples loja com um simples login com JWT e acessível no servidor SpringBoot em http:localhost:8080/ . [Arquivos do projeto do cliente Angular disponíveis em https://github.com/samuelmendespy/unique-store-angular](https://github.com/samuelmendespy/unique-store-angular)

# Referências
(https://web.dio.me/articles/springfox-descontinuado-saiba-como-migrar-para-o-springdoc)[GARCIA, Leonardo. SpringFox Descontinuado. Saiba Como Migrar Para o SpringDoc. 27 fev. 2023. Disponível em : www.dio.me. Acesso em 16 ago. 2023 ]
(https://glysns.gitbook.io/spring-framework/spring-web/swagger)[SAMPAIO, Gleyson. Swagger. Disponível em : https://glysns.gitbook.io/spring-framework/spring-web/primeiro-controller. Acesso em 15 ago. 2023]
(https://github.com/springdoc/springdoc-openapi#library-for-springdoc-openapi-integration-with-spring-boot-and-swagger-ui)[Library for springdoc-openapi integration with spring-boot and swagger-ui]

# Project details
<en-US>Project guided by the course "Criando uma API REST Documentada com Spring Web e Swagger"</en-US>