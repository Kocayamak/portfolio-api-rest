import express from 'express';
import { getProjects, createProjects } from '../controller/projects.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/get', getProjects);
router.post('/create', auth ,createProjects);

export default router;