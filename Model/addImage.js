const makeDb = require("../Connect/dataBase");
async function addRowImage(title, image) {
  console.log("model");
  const dB = makeDb();
  try {
    var ImageData = "INSERT INTO CARDS (title,image) VALUES (?,?)";
    var addImageMode = await dB.query(ImageData, [title, image]);
    console.log(addImageMode, "am");
    return addImageMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { addRowImage };
