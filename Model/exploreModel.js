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
async function ExploreTableOne(id) {
  console.log("model");
  const dB = makeDb();
  try {
    var tableData = "SELECT* FROM DETAILS where id=?";
    var editMode = await dB.query(tableData, [id]);
    console.log(editMode, "em");
    return editMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  explore,
  ExploreTableOne,
};
