const save = require("../Model/save");

async function saveTable(req, res) {
  const { id, title, content } = req.body;

  console.log("controller", id);
  try {
    const value = await save.saveData(title, content, id);
    console.log(value, "res");
    if (true) {
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
module.exports = {
  saveTable,
};
