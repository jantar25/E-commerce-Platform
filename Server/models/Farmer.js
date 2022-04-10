const mongoose = require ("mongoose")



const FarmerSchima = new mongoose.Schema(
    {
        username:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        isAdmin:{
            type:Boolean,
            default:false
        },
        telephone:{
            type:String,
        },
        description:{
            type:String,
        },
        title:{
            type:String,
        },
        company:{
            type:String,
        },
        isFarmer:{
            type:Boolean,
            default:false
        },
        img:{type:String},

},
{timestamps:true})

module.exports = mongoose.model("Farmer",FarmerSchima)