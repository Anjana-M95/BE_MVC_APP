const makeDb = require("../Connect/dataBase");
async function serviceCards(flag) {
  const dB = makeDb();
  try {
    var newData = "SELECT* FROM new WHERE flag=?";
    var joinData = await dB.query(newData, [flag]);
    console.log(flag, "modelflag");
    console.log(joinData, "cards");
    return joinData;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { serviceCards };
