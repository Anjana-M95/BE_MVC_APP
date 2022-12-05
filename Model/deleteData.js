const makeDb = require("../Connect/dataBase");
async function deleteRow(id) {
  console.log("model");
  const dB = makeDb();
  try {
    var tableData = "DELETE FROM DETAILS WHERE ID=? ";
    var addMode = await dB.query(tableData, [id]);
    console.log(addMode, "am");
    return addMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { deleteRow };
