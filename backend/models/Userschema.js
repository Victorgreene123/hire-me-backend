import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: String,
    email: String,
    whatsappNum: String,
    streetAddress: String,
    city: String,
    accountNum: String,
    Bank:String,
    password:String,
    bio: String,
    occupation: String,
    rating: Number

})


const usermodel = mongoose.model("User" , User)

export default usermodel