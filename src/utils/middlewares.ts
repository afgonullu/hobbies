import { NextFunction, Request, Response } from 'express';

const errorHandler = (error: Error, _request: Request, response: Response, next: NextFunction): void => {
  if (error.message === 'ValidationError') {
    response.status(400).json({ error: error.message });
  }

  if (error.message === 'No Payload') {
    response.status(400).json({ error: error.message });
  }

  if (error.message === 'Malformatted Payload') {
    response.status(400).json({ error: error.message });
  }

  response.status(400).json({ error: error.message });

  next(error);
};

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export default { errorHandler, unknownEndpoint };
