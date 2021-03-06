const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const authHeader=req.headers.token;
    
    if (authHeader) {
        const token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.SEC_JWT,(error,user)=>{
            if(error) return res.status(403).json("Token is invalid!");
            req.user=user;
            next();
        })
    } else {
        return res.status(401).json("You are not Authenticated!");
    }
}

const verifyTokenandAuthorisation = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user?.isAdmin){
            next();
        } else {
            return res.status(403).json("You are no allowed to do that!")
        }
    })
}

const verifyTokenandAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user?.isAdmin){
            next();
        } else {
            return res.status(403).json("You are not admin!")
        }
    })
}

const verifyTokenandFarmer = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user?.isFarmer){
            next();
        } else {
            return res.status(403).json("You are not farmer!")
        }
    })
}

const verifyTokenandFarmerOrAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user?.isFarmer || req.user?.isAdmin){
            next();
        } else {
            return res.status(403).json("You are not either Admin or farmer!")
        }
    })
}

module.exports = {verifyToken,verifyTokenandAuthorisation,verifyTokenandAdmin,verifyTokenandFarmer,verifyTokenandFarmerOrAdmin};