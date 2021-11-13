const express = require('express');

const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.get('', LoginController.get);
router.post('', LoginController.post);

module.exports = router;