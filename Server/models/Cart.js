const mongoose = require ("mongoose")


const CartSchima = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        products:[
            {
                product:{type:String},
                quantity:{type:Number,default:1},
            }
        ]

},
{timestamps:true})

module.exports = mongoose.model("Cart",CartSchima)