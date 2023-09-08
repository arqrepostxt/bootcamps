# Explorando Padrões de Projetos na Prática com Java
A project of API to Register clients with educational purpose to use Spring Framework and reference design patterns to present Singleton, Strategy/Repository and Facade.

# Features that Empower
- Seamlessly manage client addresses through intuitive API requests.
- Auto register client address using Brazilian postal codes (CEP).
- Store image files
- Flutter client for Windows and Android

# Embraced Technologies
- PostgreSQL
- Spring Boot
- Hibernate
- Java JDK 17
- Maven

# Usage of PostgreSQL
Guided by a clear vision for the project, the move to PostgreSQL brought exciting progress. It made switching from Local to Remote storage easy, and it handled bigger data and complex questions smoothly. PostgreSQL also boosted performance using smart tricks and added advanced features for better searches.

# The Journey to Elevate
The project's upgrade to Java JDK 17 was propelled by uncovering critical vulnerabilities within project dependencies. Meticulous analysis through [Dependency Analytics](https://marketplace.visualstudio.com/items?itemName=redhat.fabric8-analytics) merged with [Snyk Intel Vulnerability DB](https://snyk.io/product/vulnerability-database/) illumination illuminated potential security realms.

This enhancement journey, while harmonizing with the bleeding edge of technology, bestowed enriched performance and security. Subtle code adjustments gracefully led the way, upholding unwavering application functionality.

# Setup to run the server


Open your terminal and use the commands bellow
```
# Clone the repository
git clone repository https://github.com/samuelmendespy/standard_flutter.git
cd lab-padroes-projeto-spring

# Use the command bellow to create the configuration file testing.properties
cd src/main/resources && echo "# PROPERTIES FOR TESTING AND DEVELOPMENT #" >> testing.properties


# WINDOWS only - Open the testing.properties file with the Text Editor Windows Notepad
notepad testing.properties

# GIT TERMINAL - Open the testing.properties with nano Editor
nano testing.properties


# Copy the code bellow, paste on the text editor openad, insert your information and save
# Note: The next code block have a model of properties filed filled with sample configurations


spring.datasource.url=jdbc:postgresql://
spring.datasource.username=
spring.datasource.password=
image.server=http://localhost:8080
image.storage.path=D:\\projetos\\lab-padroes-projeto-spring\\src\\main\\resources\\images

```
Bellow is a model of properties files
```
image.storage.path=C:\\lab-padroes-projeto-spring\\src\\main\\resources\\images
spring.datasource.url=jdbc:postgresql://localhost:5432/testing_db
spring.datasource.username=dbadmintLYbI9fJtUwlGQ
spring.datasource.password=P@ssw0rdedg7VJ0WyDpfoBU#2023
image.server=http://192.168.1.2:8080
```

# Setup to build the client app for Android or Windows


```
cd flutter_app/

# Create .env 
$ echo "API_URL=192.168.18.97:8080/" >> .env
cd 
flutter pub get
flutter build windows
flutter build android
flutter run windows
flutter run android
```


# Credits
> Project forked from [https://github.com/falvojr/lab-padroes-projeto-spring](https://github.com/falvojr/lab-padroes-projeto-spring)

# Additional Information
>> Project from the program "Curso Explorando Padrões de Projetos na Prática com Java taught" by [falvojr](https://github.com/falvojr)


# Application.properties
```
# Set PostgreSQL
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.datasource.url=jdbc:postgresql://localhost:5432/app_db
spring.datasource.username=postgres
spring.datasource.password=123

# Server images folder
image.storage.path=C:\\path\\to\\storage\\

# Local IP address to acess images folder on server
image.server=192.168.0.0:8080/images/

# default connection pool
spring.datasource.hikari.connectionTimeout=20000
spring.datasource.hikari.maximumPoolSize=5

# Configure hibernate to reset database on shutdown
spring.jpa.hibernate.ddl-auto=create-drop
```
