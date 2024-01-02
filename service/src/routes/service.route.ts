import { Router } from 'express';
import { logger } from '../utils/logger.utils';

const serviceRouter = Router();

serviceRouter.get('/', (req, res) => {
  res.status(200);
  res.send({ status: 'ok', version: 1 });
});

export default serviceRouter;
