import express from 'express';
import {
    createEmployee,
    readEmployee,
    updateEmployee,
    deleteEmployee,
} from '../controllers/employeeController.js';

const router = express.Router();

// Create Employee
router.post('/employees',createEmployee);

// Read Employee
router.get('/employees/:employeeId', readEmployee);

// Update Employee
router.put('/employees/:employeeId', async (req, res) => {
    updateEmployee(req, res);
});

// Delete Employee
router.delete('/employees/:employeeId', async (req, res) => {
    deleteEmployee(req, res);
});

export default router;
