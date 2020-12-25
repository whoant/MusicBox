const express = require('express');

const router = express.Router();

const controller = require('../controllers/playlist.controller');

router.get('/', controller.getPlayList);

module.exports = router;