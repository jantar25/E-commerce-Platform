const mongoose = require ("mongoose")


const ProductSchima = new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        description:{type:String,required:true},
        img:{type:String,required:true},
        categories:{type:Array},
        size:{type:Array},
        content:{type:Array},
        price:{type:Number,required:true},
        inStock:{type:Boolean, default:true},
        farmer:{type:Array}

},
{timestamps:true})

module.exports = mongoose.model("Product",ProductSchima)