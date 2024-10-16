// src/routes/example.ts
import { Router, Request, Response } from 'express';

const exampleRouter = Router();

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Get an example message
 *     responses:
 *       200:
 *         description: Returns an example message
 */
exampleRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'This is an example response!' });
});

export default exampleRouter;
