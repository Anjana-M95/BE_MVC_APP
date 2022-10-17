const makeDb = require("../Connect/dataBase");
async function validateModel(email) {
  const dB = makeDb();
  try {
    var queryData = "SELECT * FROM usershosp WHERE email=?";
    var appData = await dB.query(queryData, [email]);
    console.log(appData);
    return appData;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  validateModel,
};
