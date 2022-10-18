const makeDb = require("../Connect/dataBase");
async function cardsMode() {
  const dB = makeDb();
  try {
    var sqlData = "SELECT* FROM CARDS";
    var cardsData = await dB.query(sqlData);
    console.log(cardsData, "cards");
    return cardsData;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  cardsMode,
};
