import * as express from 'express';

import { recordUserResponse, serveUserData } from '../controllers';
import { authenticateRoutes } from '../middleware';
import { Request } from '../models/extended-request';

const router = express.Router();

router.get('/serve', authenticateRoutes, async (req: Request, res) => {
  try {
    const data = await serveUserData(req.user.email);
    res.json(data);
  } catch (err) {
    res.clearCookie('auth');
    res.status(500).json('Something unexpected happened');
  }
});

router.post('/:processedId', authenticateRoutes, async (req: Request, res) => {
  await recordUserResponse(req.params.processedId, req.user.email, req.body.response);
  const newData = await serveUserData(req.user.email);
  res.json(newData);
});

export default router;
