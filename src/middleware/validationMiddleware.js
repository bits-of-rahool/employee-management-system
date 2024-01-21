import Joi from 'joi';

const employeeValidationSchema = Joi.object({
    employeeID: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    dateOfBirth: Joi.date().required(),
    department: Joi.string().required(),
    position: Joi.string().required(),
});
const updateValidationSchema = Joi.object({
    employeeID: Joi.number(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    dateOfBirth: Joi.date(),
    department: Joi.string(),
    position: Joi.string(),
});

const userValidationSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

export  {employeeValidationSchema,updateValidationSchema,userValidationSchema};
