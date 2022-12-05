const makeDb = require("../Connect/dataBase");
async function feedbackReply(id) {
  const db = makeDb();
  try {
    var feedback = "SELECT * FROM feedbackform where doctor_id=?";
    var feedbackData = await db.query(feedback, [id]);
    console.log(feedbackData,"feedbackData")
    return feedbackData;
  } catch (err) {
    console.log(err, "err");
    return false;
  } finally {
    await db.close();
  }
}
module.exports = { feedbackReply };
