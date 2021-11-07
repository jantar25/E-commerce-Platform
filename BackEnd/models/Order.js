const mongoose = require ("mongoose")


const OrderSchima = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        products:[
            {
                product:{type:string},
                quqntity:{type:Number,default:1},
            }
        ],
        amount:{type:Number,required:true},
        address:{type:Object,required:true},
        status:{type:String,default:"pending"},

},
{timestamps:true})

module.exports = mongoose.model("Order",OrderSchima)