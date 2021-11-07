const mongoose = require ("mongoose")


const CartSchima = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        products:[
            {
                product:{type:string},
                quqntity:{type:Number,default:1},
            }
        ]

},
{timestamps:true})

module.exports = mongoose.model("Cart",CartSchima)