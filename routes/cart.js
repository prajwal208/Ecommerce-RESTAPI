const router = require('express').Router()
const Cart = require('../Models/Cart')

//ADD Cart
router.post("/",async(req,res) => {
    const cart = new Cart(req.body)

    try {
        const savecart = await cart.save()
        res.status(200).json(savecart)
    } catch (error) {
        res.status(500).send("error occured...")
    }
})


//update CART
router.put("/:id",async (req,res) => {
    try {
        const updatecart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).send(updatecart)
    } catch (error) {
        res.status(500).send("error occured...")
    }
})

//GET SINGLE CART
router.get("/:id",async(req,res) => {
    try {
        const cart = await Cart.findById(req.params.id)
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).send("error occured...")
    }
})

//GET ALL CART
router.get("/",async(req,res) => {
    try {
        const cart = await Cart.find()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).send("error occured...")
    }
})

//DELETE CART
router.delete("/:id",async(req,res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted...")
    } catch (error) {
        res.status(500).send("error occured...")
    }
})

module.exports = router