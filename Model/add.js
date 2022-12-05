const makeDb = require("../Connect/dataBase");
async function addRow(title, content) {
  console.log("model");
  const dB = makeDb();
  try {
    var tableData = "INSERT INTO DETAILS (title,content) VALUES (?,?)";
    var addMode = await dB.query(tableData, [title, content]);
    console.log(addMode, "am");
    return addMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { addRow };
