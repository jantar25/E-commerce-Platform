const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))

app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)

app.listen(process.env.PORT || 5000,()=>{
    console.log("BackEnd Server is running on port 5000")
})