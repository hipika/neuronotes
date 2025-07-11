const express = require("express");
const router = express.Router();

const {registerUser, getUserInfo, loginUser} = require("../controllers/userController");
const validateToken = require("../middleware/auth");

router.route("/register").post(registerUser);
router.route("/info").get(getUserInfo, validateToken);
router.route("/login").post(loginUser);

module.exports = router;