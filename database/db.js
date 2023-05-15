import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


 const Connection = () => {

    const MONGODB_URI =`mongodb://${USERNAME}:${PASSWORD}@ac-jk2fjsq-shard-00-00.tbxykgl.mongodb.net:27017,ac-jk2fjsq-shard-00-01.tbxykgl.mongodb.net:27017,ac-jk2fjsq-shard-00-02.tbxykgl.mongodb.net:27017/?ssl=true&replicaSet=atlas-4aa1va-shard-0&authSource=admin&retryWrites=true&w=majority`;
    

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});


    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })
    mongoose.connection.on('error', () => {
        console.log('Error while connecting to Database');
    })
}
export default Connection;