import mongoose from 'mongoose';

const loginuser = new mongoose.Schema({
  name:{
    type: String,
    required:[true, 'name is required']
  },
  email:{
    type: String,
    required:[true, 'email is required'],
    unique:[ true , 'Duplicate entry Not Allowed']
  },
  gender:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: [true , 'password is required']
  }
} ,{timestamps: true})

export const loggedin = mongoose.model("loggedin" , loginuser);