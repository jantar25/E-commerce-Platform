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

    const alreadyExistUser = await User.findOne({email:req.body.email})
    if(alreadyExistUser){
        return res.status(409).json({message:'User with this email already exist'})
    }
    
    try{
        const savedUser= await newUser.save();        
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Something went wrong!!! We are unable to registor'});
    }

});

//LOGIN
router.post("/login", async (req,res)=>{
    const user= await User.findOne({username:req.body.username});
    if(!user) {
        return res.status(401).json({message:"Username Not Found"});
    }
    try{  
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SEC_PASS);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const accessToken = jwt.sign({id: user._id,isAdmin: user.isAdmin,},process.env.SEC_JWT,{expiresIn:"3d"});     
        const {password,...others}= user._doc;
        if(OriginalPassword !== req.body.password) {
            return res.status(401).json({message:"Wrong Password"})
        } else {
            res.status(200).json({...others, accessToken});
        }       
   
    } catch(err){
        console.log(err)
        res.status(500).json({message:'Something went wrong!!!'})
    }
});

module.exports = router
