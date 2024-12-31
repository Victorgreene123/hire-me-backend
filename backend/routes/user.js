// Import Router from express
import { Router } from 'express';
import { createUser, fetchUsers, getUser, updateUser } from '../controllers/User.js';
import { verifyToken } from '../middleware/authMiddleware.js';




const router = Router();


router.route('/').post(createUser).get(fetchUsers)


router.route('/:id').get(verifyToken,getUser).patch(verifyToken, updateUser)


export default router;
