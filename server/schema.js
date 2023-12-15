import mongoose from "mongoose";


const newUser= new mongoose.Schema({

    yourname: String,
    email: String,
    password: String
})

const User = new mongoose.model('User' , newUser)
export default User