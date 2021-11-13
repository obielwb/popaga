const express = require('express');

const SignUpController = require('../controllers/SignUpController');

const router = express.Router();

router.get('', SignUpController.get);
router.post('', SignUpController.post);

module.exports = router;