const router = require("express").Router();
const Farmer = require ("../models/Farmer");
const CryptoJS = require ("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyTokenandAdmin,verifyTokenandFarmer} = require ("./verifyToken")

//REGISTOR
router.post("/register", async (req,res)=>{
    const newFarmer = new Farmer({
        username:req.body.username,
        email:req.body.email,
        telephone:req.body.telephone,
        isFarmer:req.body.isFarmer,
        title:req.body.title,
        company:req.body.company,
        description:req.body.description,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString(),
    });
    
    try{
        const savedFarmer= await newFarmer.save();        
        res.status(201).json(savedFarmer);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

});

//UPDATE ID
router.put("/:id",(verifyTokenandFarmer || verifyTokenandAdmin),async (req,res)=>{
    try{
        const updatedFarmer = await Farmer.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedFarmer)
    } catch(err){
        res.status(500).json(err)
    }
})


//LOGIN
router.post("/login", async (req,res)=>{
    try{ 
        const farmer= await Farmer.findOne({email:req.body.email});
        // if(!farmer) {
        //     return res.status(401).json("Wrong Credentials");
        // }
        const hashedPassword = CryptoJS.AES.decrypt(farmer.password, process.env.SEC_PASS);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const accessToken = jwt.sign({id: farmer._id,isAdmin: farmer.isAdmin,isFarmer:farmer.isFarmer},process.env.SEC_JWT,{expiresIn:"3d"});     
        const {password,...others}= farmer._doc;
        OriginalPassword !== req.body.password?res.status(401).json("Wrong Credentials") :
        res.status(200).json({...others, accessToken}); 
   
    } catch(err){
        res.status(500).json(err)
    }

});

module.exports = router