import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Imports function to connect to database
import connect from './database/conn.js'

// Middleware
import router from './router/route.js'




const app = express();


// ** middleware **

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about our stack
app.set('env', 'production'); //Disable detailed error messages


// require('dotenv').config(); // Loads environment variables from .env file
const port = process.env.PORT || 8080; // Use the PORT variable or fallback to 8080



// ** http get request 
app.get('/', (req, res) => {
  res.status(201).json("HOME GET REQUEST");
});


// api routes
app.use('/api', router)


// ** start the server, but only when the database connection is valid
connect().then(() => {
  try {
    
app.listen(port, () =>{

  console.log(`Server connected to http://localhost:${port}`);
})
  } catch (error) {
    console.log('Cannot connect to the server')
    
  }
}).catch(error => {
  console.log('Invalid database connection')
}) 