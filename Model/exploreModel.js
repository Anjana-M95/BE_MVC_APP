const makeDb = require("../Connect/dataBase");
async function explore(title, content) {
  const dB = makeDb();
  try {
    var querydata = "SELECT* FROM DETAILS";
    var exploreMode = await dB.query(querydata, [title, content]);
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
