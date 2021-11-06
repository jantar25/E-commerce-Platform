const router = require("express").Router();


router.get("/usertest", (req,res)=>{
    res.send("User test is succefull");
});

module.exports = router