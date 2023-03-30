const express = require("express");
const generateImage = require("../controllers/open-ai-controllers");

const router = express.Router();
router.post("/images", generateImage);

module.exports = router;
