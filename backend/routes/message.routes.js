import express from 'express';
import { sendMessage, getMessages, } from '../controllers/message.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/:id', auth, getMessages);
router.post('/send/:id', auth, sendMessage);

export default router;