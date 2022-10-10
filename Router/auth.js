const express = require("express");
const auth = require("../Controller/auth");
const loginController = require("../Controller/loginController");
const router = express.Router();

router.post("/SignUp", auth.signUp);
router.post("/login", loginController.login);
module.exports = router;
