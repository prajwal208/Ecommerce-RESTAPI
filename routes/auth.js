const router = require('express').Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt')


//REGISTER
router.post("/register", async (req, res) => {
    try {
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        //register user
        const existedUser = await User.findOne({ username: req.body.username })
        if (existedUser) {
            res.status(500).send("Username already existed")
        } else {
            const newuser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword
            })
            res.status(200).json(newuser)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const passwordcheck = await bcrypt.compare(req.body.password,user.password)
            !passwordcheck && res.status(403).send("Wrong Password")
            res.status(200).json(user)
            
        }else{
            res.status(500).send("User Not Registered...")
        }
    } catch (error) {
        res.status(500).send("Error occured...")
    }
})





module.exports = router