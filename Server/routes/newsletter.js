const router = require("express").Router();
const Newsletter = require("../models/Newsletter");


//SAVE EMAIL FOR NEWSLETTER
router.post("/",async (req,res)=>{
    const newNewsletter = new Newsletter(req.body);
    const existingEmail= await Newsletter.findOne({email:req.body.email});
    if(existingEmail) {
        return res.status(401).json({message:"Email already exist!!"});
    }
    try {
        const savedNewsletter = await newNewsletter.save(); 
        res.status(200).json(savedNewsletter)
    } catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong!!"})
    }
})


//GET ALL MEWSLETTER EMAILS
router.get("/",async (req,res)=>{
    try{
        const newsLetterEmails =  await Newsletter.find();
        res.status(200).json(newsLetterEmails)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router

