const express = require('express');

const data = require('./data');
const metadata = require('./metadata');
const users = require('./users');

const { authenticateRoutes } = require('../middleware');

const router = express.Router();

router.use('/api', authenticateRoutes, metadata);
router.use('/api', users);
router.use('/api', authenticateRoutes, data);

module.exports = router;
