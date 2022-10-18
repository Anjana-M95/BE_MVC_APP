const auth = require("../Model/auth");
const validation = require("../Model/validation");
var validator = require("email-validator");
async function signUp(req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (name === "" || email === "" || password === "") {
      return res.status(401).send({
        success: false,
        msg: "invalid credentials",
      });
    }
    var emailReg =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    var valid = emailReg.test(email);
    if (!valid) {
      return res.status(401).send({ success: false, msg: "check your email" });
    }
    const user = await validation.validateModel(email);
    console.log(user, "user");
    if (user.length > 0) {
      return res
        .status(403)
        .send({ success: false, msg: " email already registered" });
    }
    const result = await auth.signUpModel(name, email, password);
    console.log("hvdcg", result);
    if (true) {
      res.status(200).send({ success: true, msg: "valid" });
    }
  } catch (err) {
    console.log(err, "rd=================fg");
    res.status(500).send({ success: false, msg: "invalid credentials" });
  }
}
module.exports = {
  signUp,
};
