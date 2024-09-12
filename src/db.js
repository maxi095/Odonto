{/*import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://mongo:fGpXlcAPtbQLQSZUomgxHvWKBDxzXkRT@mongodb.railway.internal:27017' || 'mongodb://localhost/odontodb');
        console.log("DB is connected")
    } catch (error) {
        console.log(error);
    }
};
*/}

import mongoose from "mongoose";
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

export const connectDB = async () => {
    try {
        // Usa la URI de MongoDB desde variables de entorno, o una URI local como fallback
        
        //const mongoURI = process.env.MONGO_PUBLIC_URL || 'mongodb://localhost/odontodb';
        
        const mongoURI = 'mongodb://mongo:fGpXlcAPtbQLQSZUomgxHvWKBDxzXkRT@autorack.proxy.rlwy.net:41347';
        
        // Conectar a MongoDB
        await mongoose.connect(mongoURI);
        
        console.log("DB is connected");
        console.log("URI = ", mongoURI)
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}; 



