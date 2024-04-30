import { Request, Response } from 'express';

export const getTest = (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
};

export const getAnotherTest = (req: Request, res: Response) => {
  res.json({
    message: 'Another test route',
  });
};
