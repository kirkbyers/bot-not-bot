const express = require('express');

const { serveUserData, recordUserResponse } = require('../controllers');

const router = express.Router();

router.get('/serve', async (req, res) => {
  const data = serveUserData(req.user.email);
  res.json(data);
});

router.post('/:processedId', async (req, res) => {
  await recordUserResponse(req.params.processedId, req.user.email, req.body.response);
  const newData = serveUserData(req.user.email);
  res.json(newData);
});

module.exports = router;
