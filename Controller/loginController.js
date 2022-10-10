const loginModel = require("../Model/loginModel");
async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log("hhhh", email, password);

  if (email === "" || password === "") {
    return res
      .status(200)
      .send({ success: false, msg: "Please enter credentials" });
  }

  try {
    const result = await loginModel.loginMode(email, password);
    console.log(result, "v");

    if (result.length !== 0) {
      res
        .status(200)
        .send({ success: true, msg: "valid", result: result[0].password });
    } else {
      res.status(200).send({ success: false, msg: "Invalid credentials" });
    } 
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}

module.exports = {
  login,
};
