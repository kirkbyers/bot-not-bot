const express = require('express');

const data = require('./data');
const metadata = require('./metadata');
const users = require('./users');

const router = express.Router();

router.use('/api', metadata);
router.use('/api', users);
router.use('/api', data);

module.exports = router;
