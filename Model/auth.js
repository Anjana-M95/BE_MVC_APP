const makeDb = require("../Connect/dataBase");
async function signUpModel(name, email, password) {
  console.log(name, email, password);
  const dB = makeDb();
  try {
    var query = "INSERT INTO usershosp (name,email,password) VALUES (?,?,?)";
    var data = await dB.query(query, [name, email, password]);
    console.log(data, "data");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}

module.exports = {
  signUpModel,
};
