const makeDb = require("../Connect/dataBase");
async function saveNewImage(title, image, id) {
  console.log("model");
  const dB = makeDb();
  try {
    var query = "UPDATE CARDS SET title=?,image=? WHERE id=?";
    var ImageSaved = await dB.query(query, [title, image, id]);
    console.log(ImageSaved, "data");
    return ImageSaved;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  saveNewImage,
};
