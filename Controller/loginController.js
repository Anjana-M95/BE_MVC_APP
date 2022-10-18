const loginModel = require("../Model/loginModel");
var validator = require("email-validator");
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
    var emailRegx =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    var valid = emailRegx.test(email);
    if (!valid) {
      return res
        .status(200)
        .send({ success: false, msg: "Enter a valid email", auth: false });
    }
    if (result.length !== 0) {
      const jwtSecretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ email: email }, jwtSecretKey);
      console.log(token);
      res
        .status(200)
        .send({ token: token, success: true, auth: true, msg: "valid" });
      console.log(token, "token");
    } else {
      res.status(200).send(
        { success: false, msg: "Invalid credentials", auth: false }
        // {, msg: "no token passed" },
      );
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, auth: false, msg: "Internal server error" });
  }
}

module.exports = {
  login,
};
