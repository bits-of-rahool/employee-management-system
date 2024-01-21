import express from 'express';
import {
    createEmployee,
    readEmployee,
    updateEmployee,
    deleteEmployee,
    allEmployees,
} from '../controllers/employeeController.js';

const router = express.Router();

router.route("/")
.post(createEmployee)
.get(allEmployees)

router.route('/:employeeId')
    .get(readEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee);
export default router;
