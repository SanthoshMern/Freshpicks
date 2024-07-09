const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user-model');


const Register = async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNumber,password,confirmPassword } = req.body;

        if (!(firstName && lastName && email && mobileNumber && password && confirmPassword)) {
            res.status(400).send({ message: "All inputs required" });
        }

        const oldUser = await userModel.findOne({ email });
        if (oldUser) {
            return res.status(409).send({ message: "User Already Exist. Please Login" });
        }

        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            firstName, lastName, email: email.toLowerCase(), mobileNumber, password: encryptedPassword, confirmPassword: encryptedPassword
        });

        const token = jwt.sign(
            { user_id: user._id, email },   
            "securitykeygen",
            {
                expiresIn: "1h",
            }
        );
        user._token = token;
        user.message="Registered Successfully";
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Invalid Credentials" });
    }
}

const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("data "+req.body.email+"-"+req.body.password)
        if (!(email && password)) {
            res.status(400).json({ message: "All inputs required" });
        }
        const user = await userModel.findOne({ email });
if(user){
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { _id: user._id, email },
                "securitykeygen",
                {
                    expiresIn: "1h",
                }
            );
            user._token = token;
            user.message="Login Success";
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: "password mismatch" });
        }
    }
    else{
        res.status(400).send({ message: "User not exist please register" });
    }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "invalid credentials" });
    }
}


const resetpass = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
 
            res.status(400).json({ message: "All inputs required" });
        }
        const user = await userModel.findOne({ email });

     if(user){
        encryptedPassword = await bcrypt.hash(password, 10);
       const rep= await userModel.updateOne({ _id: user._id },
            { $set: { password: encryptedPassword } },
            { new: true }
          );
 
            user.message="Password Updated";
            res.status(200).json(user);
        } 
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "User not exist please register" });
    }
}

module.exports = {
    Signin,
    Register,
    resetpass,
}