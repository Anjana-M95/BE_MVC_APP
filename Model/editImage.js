const makeDb = require("../Connect/dataBase");
async function editImageRow() {
  const dB = makeDb();
  try {
    var ImageQuery = "SELECT* FROM CARDS";
    var cardImageMode = await dB.query(ImageQuery);
    console.log(cardImageMode, "em");
    return cardImageMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
async function EditImageOne(id) {
  console.log("model");
  const dB = makeDb();
  try {
    var tableImage = "SELECT* FROM CARDS where id=?";
    var editImageMode = await dB.query(tableImage, [id]);
    console.log(editImageMode, "em");
    return editImageMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  editImageRow,
  EditImageOne,
};
