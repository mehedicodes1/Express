import express from 'express';
import { addEmp, getAllEmp } from '../controller/userController.js';

const router = express.Router();

router.get('/getall', getAllEmp);

router.post('/add', addEmp);


export default router;
