const router = require("express").Router();


router.get("/usertest", (req,res)=>{
    res.send("Users test is succefull");
});

router.post("/usersposttest", (req,res)=>{
    const username = req.body.username;
    res.send("your username is:"+ username);
});

module.exports = router