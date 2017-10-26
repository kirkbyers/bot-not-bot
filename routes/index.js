const express = require('express');

const metadata = require('./metadata');

const router = express.Router();

router.use('/api', metadata);

module.exports = router;
