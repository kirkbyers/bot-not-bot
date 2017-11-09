import * as express from 'express';

import { authenticateRoutes } from '../middleware';
import { getClassificationOptions } from '../utils';

const router = express.Router();

router.get('/metadata', authenticateRoutes, (req, res) => {
  res.json({
    options: getClassificationOptions(),
  });
});

export default router;
