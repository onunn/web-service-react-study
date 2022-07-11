const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send(express.static(path.join(__dirname, '../../client/build/index.html')));
});

module.exports = router;