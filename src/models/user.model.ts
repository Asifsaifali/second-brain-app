import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    
}, {timestamps : true})

export type IUser = mongoose.InferSchemaType<typeof userSchema>;


const User = mongoose.model("User", userSchema)
export default User;
