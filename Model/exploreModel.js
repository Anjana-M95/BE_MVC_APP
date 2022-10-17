const makeDb = require("../Connect/dataBase");
async function explore() {
  const dB = makeDb();
  try {
    var querydata = "SELECT* FROM DETAILS";
    var exploreMode = await dB.query(querydata);
    console.log(exploreMode, "em");
    return exploreMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  explore,
};
