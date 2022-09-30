const auth = require("../Model/auth");

async function create(req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const result = await auth.connectDb(name, email, password);
    console.log("hvdcg", result);
    if (name === "" || email === "" || password === "") {
      return res.send({ success: false });
    }

    if (true) {
      res.send({ success: true });
    }
  } catch (err) {
    res.status(500).send({ success: false }, "invalid credentials");
  }
}
module.exports = {
  create,
};
