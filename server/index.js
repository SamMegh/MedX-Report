import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./src/routes/auth.route.js"
import { connectToDB } from './src/lib/monos.db.connection.js';
import cors from 'cors';


dotenv.config();
const app = express();
const port = process.env.Port;


const ClientOrigin= process.env.ClientOriginUrl
console.log(ClientOrigin);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:ClientOrigin,
    credentials: true
}))


app.use("/",authRouter);



app.listen(port,()=>{
    console.log("server started at : "+port);
    connectToDB();
})