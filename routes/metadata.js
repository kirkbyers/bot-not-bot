const express = require('express');

const { getClassificationOptions } = require('../utils');

const router = express.Router();

router.get('/metadata', (req, res) => {
  res.json({
    options: getClassificationOptions(),
  });
});

module.exports = router;
