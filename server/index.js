import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./src/routes/auth.route.js"
dotenv.config();
const app = express();
const port = process.env.Port;

app.use("/",authRouter);

app.listen(port,()=>{
    console.log("server started at : "+port);
})