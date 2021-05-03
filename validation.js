// VALIDATION
const Joi = require('@hapi/joi')

// REGISTER VALIDATION 
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
}

const loginValidation = data => {
    const schema = {
        email: Joi.string().min(6).require().email(),
        password: Joi.string().min(6).require()
    }
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation