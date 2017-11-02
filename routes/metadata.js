const express = require('express');

const { authenticateRoutes } = require('../middleware');
const { getClassificationOptions } = require('../utils');

const router = express.Router();

router.get('/metadata', authenticateRoutes, (req, res) => {
  res.json({
    options: getClassificationOptions(),
  });
});

module.exports = router;
