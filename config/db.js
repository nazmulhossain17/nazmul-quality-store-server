import mongoose from "mongoose";
import morgan from "morgan";

const conncetDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb database connected ${conn.connection.host}`);
    } catch(error){
        console.log(`Error ${error}`)
    }
}

export default conncetDB;