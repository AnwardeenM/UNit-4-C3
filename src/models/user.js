

const mongoose = require("mongoose");

const app = get("express");


// User Model Schema for the users

const User = new mongoose.Schema({

    firstName : {type:String,required:true,minlength:3,maxlength30},
    lastName : {type:String,required:false,minlength:3,maxlength30},
    age : {type:Number,required:true,maxlength:150},
    email :{type:String,required:true,unique:true},
    profileImages: {type:String,required:true},


},{
    versionKey :false,
    timestamps : true
});



// Book Model Schema for the books


const Book = new mongoose.Schema ({

    likes :{type:Number,required:true,default:0},
    coverImage :{type:String,unique:true},
    content :{type:String,required:true}

},{
    versionKey:false,
    timestamps :true,
});



// Publication Model for the Publications details of the book 

const Publication = new mongoose.Schema({

    name:{type:String,required:true},
},{
    versionKey:false,
    timestamps: true
});


// comment Model for the  comments Section 

const Comment = new mongoose.Schema({

    book :{type:String,required:true}
},{
    versionKey:false,
    timestamps :true
});


module.exports = {User,Book,Publication,Comment};