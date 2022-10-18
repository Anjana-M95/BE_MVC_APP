const exploreModel = require("../Model/exploreModel");
async function exploreHome(req, res) {
  // const token = req.body.headers.authToken;
  console.log("controller");
  try {
    const value = await exploreModel.explore();
    console.log(value, "res");
    if (value) {
      res.status(200).send({
        success: true,
        value: [value],
        auth: true, // token: token
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = {
  exploreHome,
};
