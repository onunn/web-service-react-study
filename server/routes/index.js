const express = require("express");
const router = express.Router();

const landing = require('./landing/landing');
const login = require('./login/login');

router.use('/', landing);
router.use('/login', login);

module.exports = router;