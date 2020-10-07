const joi = require('@hapi/joi');



const schemas = {
    send: joi.object().keys({
        from: joi.string().required(),
        to: joi.array().items(joi.string()).optional(),
        cc: joi.array().items(joi.string()).optional(),
        bcc: joi.array().items(joi.string()).optional(),
        subject: joi.string().required(),
        text: joi.string().required(),
       
    })
};


module.exports = schemas;

