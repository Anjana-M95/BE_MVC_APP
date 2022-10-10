const makeDb = require("../Connect/dataBase");
async function loginMode(email, password) {
  const dB = makeDb();
  try {
    var sqlquery = "SELECT * FROM usershosp WHERE email=? AND password=?";
    var model = await dB.query(sqlquery, [email, password]);
    console.log(model);
    return model;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  loginMode,
};
