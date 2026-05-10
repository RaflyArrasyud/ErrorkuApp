import { Router } from 'express';
import * as errorController from '../controllers/errorController';

const router = Router();

router.post('/analyze', errorController.analyzeError);

export default router;
