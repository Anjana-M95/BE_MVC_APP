const express = require("express");
const auth = require("../Controller/auth");
const router = express.Router();

router.post("/SignUp", auth.create);
module.exports = router;
