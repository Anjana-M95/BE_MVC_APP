const makeDb = require("../Connect/dataBase");
async function CommentModel(id) {
  const db = makeDb();
  try {
    var commentAll =
      "SELECT feedbackform.user,feedbackform.userfeedback,feedbackform.doctor_id,reply.name,reply.reply,reply.user_id FROM FEEDBACKFORM  JOIN REPLY ON reply.user_id=feedbackform.id WHERE user_id=? order by reply.reply DESC LIMIT 5";
   var Model = await db.query(commentAll, [id]);
    return Model;
  } catch (err) {
    console.log(err, "err");
    return false;
  } finally {
    await db.close();
  }
}
module.exports = { CommentModel };
