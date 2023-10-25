import mongoose from 'mongoose';

const userdata = new mongoose.Schema({
  title:{
    type: String,
    required: [true , 'title is required'],
  },
  content:{
    type: String,
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user',
  }
} , {timestamps: true});

export const data = mongoose.model('data' , userdata)