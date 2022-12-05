const makeDb = require("../Connect/dataBase");
async function saveData(title, content, id) {
  console.log("model");
  const dB = makeDb();
  try {
    var query = "UPDATE DETAILS SET title=?,content=? WHERE id=?";
    var dataSaved = await dB.query(query, [title, content, id]);
    console.log(dataSaved, "data");
    return dataSaved;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  saveData,
};
