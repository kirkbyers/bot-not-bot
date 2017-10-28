const express = require('express');

const metadata = require('./metadata');
const users = require('./users');

const router = express.Router();

router.use('/api', metadata);
router.use('/api', users);

module.exports = router;
