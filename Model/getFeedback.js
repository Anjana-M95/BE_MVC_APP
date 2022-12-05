const makeDb = require("../Connect/dataBase");
async function feedbackOne(id) {
  const dB = makeDb();
  try {
    const result = [];
    const feedbackListQuery = "SELECT * FROM feedbackform where doctor_id=?";
    const replyListQuery =
      "SELECT reply.id,reply.name,reply.reply,reply.user_id FROM FEEDBACKFORM inner join reply on feedbackform.id=reply.user_id where feedbackform.doctor_id=? and feedbackform.id =? Order by reply.id DESC LIMIT 5";
    const feedbackList = await dB.query(feedbackListQuery, [id]);
    feedbackList.map(async (item, index) => {
      const replyList = await dB.query(replyListQuery, [id, item.id]);
      item.reply = replyList;
      result[index] = item;
    });
    return result;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { feedbackOne };
