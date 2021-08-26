import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import middlewares from './utils/middlewares';
import userRouter from './routes/userRouter';
import hobbyRouter from './routes/hobbyRouter';

import swaggerUI from 'swagger-ui-express';
import docs from './docs';

require('express-async-errors');
require('./db/mongo');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/users', userRouter);
app.use('/hobbies', hobbyRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.use(middlewares.unknownEndpoint);
app.use(middlewares.errorHandler);

export default app;
