//3rd Party Modules
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        minlength:6,
        type:String
    },
});

module.exports = mongoose.model('User',userSchema);