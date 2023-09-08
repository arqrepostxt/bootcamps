# mern-login
Login model with MongoDB, Express, ReactJS and Node JS.


# Features
 - User registration
 - Upload a picutre or get a random imagem from picsum.photos/512
 - Reset user password with OTP and Mail
 - API with Axios
 - JWT token
 - Check user authentication
 - Stores user data with MongoDB

# Packages

- Express
- CORS
- Mongoose and MONGODB
- Nodemon
- Morgan

Installation for node : 
```
$ npm install express cors mongoose mongodb-memory-server multer nodemon morgan
```


Create the file .env with client environment variables 
mern-login/client/.env```
REACT_APP_SERVER_DOMAIN='http://localhost:8080'
```

Create the file .env with server environment variables
mern-login/server/.env```
JWT_SECRET=
EMAIL=
PASSWORD=
ATLAS_URI=
```


Generate the JWT_SECRET : 
```
$ openssl rand -base64 32
```

*Create a sample ethereal account to get <EMAIL> and <PASSWORD> : https://ethereal.email/create

*Create a Atlas Clusten in MongoDB to get your connection string <ATLAS_URI>





# Credits
> Project developed following the Youtube tutorial avaiable in https://youtu.be/BfrJxGQEPSc


# Additional information

- Info about JWT in NodeJS: https://www.luiztools.com.br/post/autenticacao-de-webapi-com-api-key/
- Usage of dotenv: https://medium.com/swlh/authentication-how-to-create-a-nodejs-application-using-jwt-cee8bc5a89fe