import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./src/routes/auth.route.js"
import { connectToDB } from './src/lib/monos.db.connection.js';
dotenv.config();
const app = express();
const port = process.env.Port;



app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/",authRouter);



app.listen(port,()=>{
    console.log("server started at : "+port);
    connectToDB();
})