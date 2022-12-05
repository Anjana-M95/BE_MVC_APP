const editImage = require("../Model/editImage");

async function editRowImage(req, res) {
  console.log("controller");
  try {
    const value = await editImage.editImageRow();
    if (true) {
      res.status(200).send({
        value: value,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
async function EditOneImage(req, res) {
  const id = req.query.id;
  console.log("controller", id);
  try {
    const value = await editImage.EditImageOne(id);
    console.log(value, "res");
    if (value) {
      res.status(200).send({
        value: value,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = {
  editRowImage,
  EditOneImage,
};
