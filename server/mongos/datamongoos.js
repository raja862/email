import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const datass=process.env.MONGO_URL

const mongoData=async()=>{

    try{
const datamongo= await mongoose.connect(datass)
console.log("db connected ")
return datamongo
    }
    catch(error){
console.log("Db connection error")
    }
}
export default mongoData;