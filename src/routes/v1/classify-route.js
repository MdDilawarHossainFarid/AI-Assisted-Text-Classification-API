const express = require("express");
const{ClassifyMiddlewares} = require('../../middlewares')
const {ClassifyController} = require('../../contollers')

const router = express.Router();

router.post(
  "/",
 ClassifyMiddlewares.validateClassifyRequest,
 ClassifyController.createClassify
);


module.exports = router;
