const saveImage = require("../Model/saveImage");

async function saveTableImage(req, res) {
  const title = req.body.title;
  const image = req.file;
  const id = req.query.id;
  console.log("controller", id);
  try {
    const value = await saveImage.saveNewImage(title, image.originalname, id);
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
  saveTableImage,
};
