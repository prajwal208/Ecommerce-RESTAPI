const router = require('express').Router()
const Product = require('../Models/Product')

// Post Product 
router.post('/',async(req,res) => {
    try {
        const product = await Product.create({
            productname:req.body.productname,
            Price:req.body.price,
            desc:req.body.desc,
            color:req.body.color,
            category:req.body.category,
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).send("error occured")
    }
    
})

//get Single Product
router.get('/:id',async (req,res) => {
    try {
        const productId = await Product.findById(req.params.id)
        res.status(200).json(productId)
    } catch (error) {
        res.status(500).send("error occured")
    }
    
})

//get All product
router.get('/',async (req,res) => {
    try {
        const allProduct = await Product.find()
        res.status(200).json(allProduct)
    } catch (error) {
        res.status(500).send("error occured")
    }
})

//Update Product

router.post("/:id",async(req,res) => {
    try {
        const updateproduct = await Product.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        },{new:true})
        res.status(200).json(updateproduct)
    } catch (error) {
        res.status(500).send("error occured")
    }
})

//Delete Product
router.delete("/:id",async(req,res) => {
    try {
    const productId = await Product.findByIdAndDelete(req.params.id)
    res.status(200).send("Successfully Deleted...")
    } catch (error) {
        res.status(500).send("error occured")
    }
    
})

module.exports = router