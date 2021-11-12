const router = require("express").Router();
const User = require("../models/User");
const {verifyToken,verifyTokenandAuthorisation} = require ("./verifyToken")

router.put("/:id",verifyTokenandAuthorisation,async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedUser)
    } catch{
        res.status(500).json(err)
    }
})


module.exports = router

// router.get("/usertest", (req,res)=>{
//     res.send("Users test is succefull");
// });

// router.post("/usersposttest", (req,res)=>{
//     const username = req.body.username;
//     res.send("your username is:"+ username);
// });