const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/auth')
const productrouter = require('./routes/product')
const cartrouter = require('./routes/cart')
require('dotenv').config()


const connectdb = async () => {
    try {
        await mongoose.connect(process.env.SECRET_KEY)
        console.log("connected to database...");
    } catch (error) {
       console.log(error);
    }
}
connectdb()

//middlewear
app.use(express.json())


//routes
app.use('/api/user/',router)
app.use('/api/product/',productrouter)
app.use('/api/cart/',cartrouter)



PORT = 5000
app.listen(PORT,() => {
    console.log(`Server started at PORT ${PORT}`);
})