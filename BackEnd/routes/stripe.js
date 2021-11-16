const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JvPoqKBZkT4LPtBK79H4y617hu3Qt4CU29EjQ9nXD4YVkpdcBpmMzDrsXaADp6UGTLxyLCiDnPBG6ztOZ5fbYOk001fQzT4E9");

router.post("/payment",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"rwf",
    },(stripeErr,stripeRes)=>{
        if(stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)  
        }
    })
})

module.exports = router