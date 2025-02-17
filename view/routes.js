import express from 'express';
import { addEmp, getAllEmp, updateEmp, deleteEmp} from '../controller/userController.js';

const router = express.Router();

router.get('/getall', getAllEmp);

router.post('/add', addEmp);

router.put('/emp/:id', updateEmp);

router.delete('/emp/:id', deleteEmp);


export default router;
