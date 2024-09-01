const Joi = require('joi');

function validateuser(data) {
    const schema = Joi.object().keys({ 
        firstname: Joi.string().alphanum().min(3).max(30).required(),
        lastname:Joi.string().alphanum().min(3).max(30).required(),
        mobileno: Joi.string().length(10).required(), 
        email : Joi.string().email().required(),
        password : Joi.string().required(),
    });

const result =  schema.validate(data); 
return result;
};

module.exports = validateuser;