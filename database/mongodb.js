import mongoose from 'mongoose'
import {NODE_ENV,DB_URI} from '../config/env.js'

if(!DB_URI){
    throw new Error('Please define the MONGO_DB URI variable inside .env.<development/production>.local')
}

const connectToDB=async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log('connected to database')
    }catch(error){
        console.error('Error connecting to your Database',error);
        process.exit(1);
    }
}

export default connectToDB;