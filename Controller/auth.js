const auth = require("../Model/auth");
async function signUp(req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (name === "" || email === "" || password === "") {
      return res
        .status(500)
        .send({ success: false, msg: "invalid credentials" });
    }
    const result = await auth.signUpModel(name, email, password);
    console.log("hvdcg", result);
    if (true) {
      res.status(200).send({ success: true, msg: "valid" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "invalid credentials" });
  }
}
module.exports = {
  signUp,
};
