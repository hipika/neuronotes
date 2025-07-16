const express = require("express");
const router = express.Router();

const {makeNode, getNodeInfo} = require("../controllers/nodeController");

router.route("/generate").post(makeNode);
router.route("/info").get(getNodeInfo)

module.exports = router;