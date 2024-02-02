import Employee from '../models/employeeModel.js';
import  {employeeValidationSchema,updateValidationSchema}  from '../middleware/validationMiddleware.js';

const createEmployee = async (req, res) => {
    console.log(req.body)
    try {
        const validatedData = await employeeValidationSchema.validateAsync(req.body);
        const employee = new Employee(validatedData);
        const savedEmployee = await employee.save();
        res.status(200).json({message:"Employee created",savedEmployee});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const allEmployees = async (req, res) => {
    try {
        let { page = 1, limit = 10, sort, filter } = req.query;
        const skip = (page - 1) * limit;
        limit = Number(limit);
        let filterQuery = {};
        let sortQuery = {fullname:1};
        if (sort) {
            const sortingKey = sort.endsWith(':desc') ? sort.slice(0, -5) : sort;
            const sortOrder = sort.endsWith(':desc') ? -1 : 1;
            sortQuery = { [sortingKey]: sortOrder };
        }

        if (filter) {
            const filterObject = JSON.parse(filter);
            const key = Object.keys(filterObject)[0];
            const value = Object.values(filterObject)[0];

            const newQuery = {
            [key]: {
                $regex: value,
                $options: 'i'
            }
};

filterQuery = { ...newQuery };

        }

        const aggregationPipeline = [
            { $match: filterQuery },
            {$sort:sortQuery},
            { $skip: skip },
            { $limit: limit },
        ];

        const employees = await Employee.aggregate(aggregationPipeline);
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const readEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({ employeeID: req.params.employeeId });
        if (!employee) {
                res.status(404).json({ error: 'Employee not found' });
            return;
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const validatedData = await updateValidationSchema.validateAsync(req.body);
        const employee = await Employee.findOneAndUpdate(
            { employeeID: req.params.employeeId },
            validatedData,
            { new: true }
        ); 
        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        res.status(200).json({"Updated Emplyee":employee});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({ employeeID: req.params.employeeId });
        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        res.status(200).json({message:`Employee with employeeID: ${employee.employeeID} deleted`});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createEmployee, readEmployee, updateEmployee, deleteEmployee,allEmployees };
