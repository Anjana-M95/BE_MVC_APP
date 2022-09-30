const makeDb = require("../Connect/dataBase");

async function connectDb(name, email, password) {
  const dB = makeDb({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hospdb",
  });
  try {
    var query = "INSERT INTO usershosp(name,email,password) VALUES (?,?,?)";
    return true;
  } catch (err) {
    return false;
  } finally {
    await dB.close();
  }
}

module.exports = {
  connectDb,
};
