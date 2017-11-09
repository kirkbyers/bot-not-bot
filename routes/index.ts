import * as express from 'express';

import data from './data';
import metadata from './metadata';
import users from './users';

const router = express.Router();

router.use('/api', metadata);
router.use('/api', users);
router.use('/api', data);

export default router;
