const router = require("express").Router();
const User = require ("../models/User");
const CryptoJS = require ("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTOR
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString(),
    });
    
    try{
        const savedUser= await newUser.save();        
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

});

//LOGIN
router.post("/login", async (req,res)=>{
    try{ 
        const user= await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong Credentials");
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SEC_PASS);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const accessToken = jwt.sign({id: user._id,isAdmin: user.isAdmin,},process.env.SEC_JWT,{expiresIn:"1d"});     
        const {password,...others}= user._doc;
        OriginalPassword !== req.body.password?res.status(401).json("Wrong Credentials") :
        res.status(200).json({...others, accessToken}); 
   
    } catch(err){
        res.status(500).json(err)
    }

});

module.exports = router
