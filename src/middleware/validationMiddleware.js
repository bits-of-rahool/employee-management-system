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

export default employeeValidationSchema;
