const addImage = require("../Model/addImage");

async function addNewImage(req, res) {
  const title = req.body.title;
  const image = req.file;
  console.log("controller", image);
  if (title === "" || image === "") {
    return res.status(401).send({
      success: false,
      msg: "check if there is input",
    });
  }
  try {
    const value = await addImage.addRowImage(title, image.originalname);
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
module.exports = { addNewImage };
