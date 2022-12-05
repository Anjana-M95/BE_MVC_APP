const makeDb = require("../Connect/dataBase");
async function feedbackModel() {
  const dB = makeDb();
  try {
    var sqlData = "SELECT * FROM FEEDBACKTBL ";
    var feedbackData = await dB.query(sqlData);
    console.log(feedbackData, "feed");
    return feedbackData;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  feedbackModel,
};
