const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const farmerAuthRoute = require("./routes/farmerAuth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const NewsletterRoute = require("./routes/newsletter")


dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))



app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/farmerAuth",farmerAuthRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout",stripeRoute)
app.use("/api/newsletter",NewsletterRoute)
app.get("/",(req,res)=>{
    res.send("Hello, Welcom to KivuGreen API")
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("BackEnd Server is running on port 5000")
})