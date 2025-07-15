const express = require("express");
const router = express.Router();

const {registerUser, getUserInfo, loginUser} = require("../controllers/userController");
const validateToken = require("../middleware/auth");

router.route("/register").post(registerUser, validateToken);
router.route("/info").get(getUserInfo, validateToken);
router.route("/login").post(loginUser, validateToken);

module.exports = router;