const express = require("express");
const router = express.Router();

const {createSession, getSession, deleteSession} = require("../controllers/sessionsController");
const validateToken = require("../middleware/auth");

router.route("/store").post(validateToken, createSession);
router.route("/sessions").get(validateToken, getSession);
router.route("/sessions/:id").delete(validateToken, deleteSession);
module.exports = router;