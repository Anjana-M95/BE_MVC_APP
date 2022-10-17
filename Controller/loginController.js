const loginModel = require("../Model/loginModel");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log("hhhh", email, password);

  try {
    if (email === "" || password === "") {
      return res
        .status(200)
        .send({ success: false, msg: "Please enter credentials" });
    }
    const result = await loginModel.loginMode(email, password);
    console.log(result, "v");

    if (result.length !== 0) {
      const jwtSecretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ email: email }, jwtSecretKey);
      console.log(token);
      res.status(200).send({ token: token, success: true, msg: "valid" });
      console.log(token, "token");
    } else {
      res.status(200).send(
        { success: false, msg: "Invalid credentials" }
        // { auth: false, msg: "no token passed" },
      );
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}

module.exports = {
  login,
};
