const express = require("express");
const router = express.Router();

const {makeNode, getNodeInfo} = require("../controllers/nodeController");
const validateToken = require("../middleware/auth");

router.route("/generate").post(validateToken, makeNode);
router.route("/info").get(getNodeInfo)

module.exports = router;