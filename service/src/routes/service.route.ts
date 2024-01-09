import { Router } from 'express';

const serviceRouter = Router();

serviceRouter.get('/', (req, res) => {
  res.status(200);
  res.send({ status: 'ok', version: 2 });
});

export default serviceRouter;
