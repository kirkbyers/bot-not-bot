const express = require('express');

const { serveUserData, recordUserResponse } = require('../controllers');
const { authenticateRoutes } = require('../middleware');

const router = express.Router();

router.get('/serve', authenticateRoutes, async (req, res) => {
  const data = await serveUserData(req.user.email);
  res.json(data);
});

router.post('/:processedId', authenticateRoutes, async (req, res) => {
  await recordUserResponse(req.params.processedId, req.user.email, req.body.response);
  const newData = await serveUserData(req.user.email);
  res.json(newData);
});

module.exports = router;
