import mongoose from "mongoose";

import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();

async function connect(){

  mongoose.set('strictQuery', true);
  const db = await mongoose.connect(process.env.ATLAS_URI);
  console.log("Database Connected");
  return db;
}

export default connect;