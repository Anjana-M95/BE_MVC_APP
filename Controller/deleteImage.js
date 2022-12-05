const deleteImage = require("../Model/deleteImage");
async function deleteImageRow(req, res) {
  const id = req.query.id;
  console.log("controller", id);
  try {
    const value = await deleteImage.deleteRowImage(id);
    console.log(value, "res");
    if (value) {
      res.status(200).send({
        success: true,
        msg: "succesfully deleted",
        value: value,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = { deleteImageRow };
