const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

router.get('/', controller.index);

router.get('/logout', controller.logOut);


module.exports = router;