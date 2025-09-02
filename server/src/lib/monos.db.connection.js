import mongoose from "mongoose";

export const connectToDB = async()=>{
    try {
        const con= await mongoose.connect(process.env.Mongos_DB_URL);
        console.log("mongos connected : "+ con.connection.host);
    } catch (error) {
        console.log("unable to make connection between user and Db "+error)
    }
}