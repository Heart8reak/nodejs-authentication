const router = require('express').Router()
const User = require('../model/User')
const { registerValidation } = require('../validation')


router.post('/register', async (req, res) => {

    // VALIDATE DATA BEFORE CREATING A USER
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // CHECKING IF USER IS IN THE DATABASE
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email already exist')

    // CREATE NEW USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

// router.post('/login', (req, res) => {

// })

module.exports = router