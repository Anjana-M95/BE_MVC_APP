const makeDb = require("../Connect/dataBase");
async function deleteRowImage(id) {
  console.log("model");
  console.log(id, "id");
  const dB = makeDb();
  try {
    var rowImage = "DELETE FROM CARDS WHERE ID=? ";
    var deleteMode = await dB.query(rowImage, [id]);
    console.log(deleteMode, "am");
    return deleteMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { deleteRowImage };
