const mongoose = require("mongoose");

const signinschema = new mongoose.Schema({
  Password:{type: String, required:true,unique:true},
  email:{type:String, required:true, unique:true}
});

const registerSchema = new mongoose.Schema({
  firstname : { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true, },
  mobileNumber:{type: String, required: true },
  Password:{type: String, required:true,unique:true},
  confirmPassword:{type: String, required:true,unique:true},
  email:{type:String, required:true, unique:true}
});

formSchema.pre('save', function (next) {
  next();
});

const Register = mongoose.model("Register", registerSchema);
const Signin = mongoose.model("Signin", signinschema);

module.exports = {Register,Signin}