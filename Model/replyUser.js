const makeDb = require("../Connect/dataBase");
async function replyReview(name, reply, id) {
  console.log(name, reply);
  const dB = makeDb();
  try {
    var replyQuery =
      "INSERT INTO replyfeedback (name,reply,user_id) VALUES (?,?,?)";
    var replyData = await dB.query(replyQuery, [name, reply, id]);
    console.log(replyData, "reply");
    return replyData;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { replyReview };
