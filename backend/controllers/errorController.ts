import { Request, Response } from 'express';
import * as aiService from '../services/aiService';

export const analyzeError = async (req: Request, res: Response) => {
    try {
        const { errorText } = req.body;
        const analysis = await aiService.explainError(errorText);
        res.json(analysis);
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze error' });
    }
};
