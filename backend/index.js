import express, { json } from 'express';
import mongoose from 'mongoose';
import { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js';
import { Leadrouter } from './routes/leadRoutes.js';

const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000', // Frontend URL
// }));


app.use(cors());


// load environment variables
dotenv.config()

app.use(json());

app.use('/user', userRoute)
app.use('/lead', Leadrouter)

connect(process.env.DATABASE_URL)
    .then(()=> console.log("DB connect successfully"))
    .catch((err)=>console.log("failed to connect database",err))

app.listen(3000,()=>{
    console.log("server is running.. 3000")
})