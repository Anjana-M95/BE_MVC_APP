const add = require("../Model/add");

async function addData(req, res) {
  const title = req.body.title;
  const content = req.body.content;
  console.log("controller");
  if (title === "" || content === "") {
    return res.status(401).send({
      success: false,
      msg: "check if there is input",
    });
  }
  try {
    const value = await add.addRow(title, content);
    console.log(value, "res");
    if (value) {
      res.status(200).send({
        success: true,
        value: value,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = { addData };
