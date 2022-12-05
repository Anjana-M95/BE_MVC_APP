const makeDb = require("../Connect/dataBase");
async function addFeedback(feedback, id) {
  console.log("model");
  const dB = makeDb();
  try {
    var feedsql = "INSERT INTO FEEDBACKTBL VALUES FEEDBACK=? WHERE ID=?";
    var addfeedbackMode = await dB.query(feedsql, [feedback, id]);
    console.log(addfeedbackMode, "am");
    return addfeedbackMode;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { addFeedback };
