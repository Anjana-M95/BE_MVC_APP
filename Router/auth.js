const express = require("express");
const auth = require("../Controller/auth");
const exploreController = require("../Controller/exploreController");
const loginController = require("../Controller/loginController");
const cardsController = require("../Controller/cardsController");
const { verifyJWT } = require("../middleWare/checkToken");
const router = express.Router();
router.post("/SignUp", auth.signUp);
router.post("/login", loginController.login);
router.get("/details", verifyJWT, exploreController.exploreHome);
router.get("/cards", verifyJWT, cardsController.cardsControl);
module.exports = router;
 