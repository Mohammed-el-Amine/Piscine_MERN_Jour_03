var mongoose = require('mongoose');
 
//===========================
// SCHEMAS .
//===========================
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:String,
    phone:String
});
var userModel=mongoose.model('users',userSchema);

module.exports = mongoose.model("Users", userModel);