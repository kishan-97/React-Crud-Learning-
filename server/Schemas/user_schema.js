const mongoose=require('mongoose');

const User_schema=mongoose.Schema({
    name:String,
    username:String,
    phone:String,
    email:String
});


module.exports=mongoose.model('User',User_schema);