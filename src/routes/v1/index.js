const express = require("express");
const classifyRoutes = require("./classify-route");

const router = express.Router();

router.use("/classify", classifyRoutes);

module.exports = router;