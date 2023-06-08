const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productname:{
        type:String,
    },
    Price:{
        type:Number
    },
    desc:{
        type:String
    },
    color:{
        type:String
    },
    category:{
        type:String
    }
})

module.exports = mongoose.model('Product', ProductSchema)