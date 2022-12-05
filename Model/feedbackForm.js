const makeDb = require("../Connect/dataBase");
async function feedbackData(name, feedback, id) {
  console.log(name, feedback, "fbmodel");
  const dB = makeDb();
  try {
    var query =
      "INSERT INTO FEEDBACKFORM(user,userfeedback,doctor_id) VALUES (?,?,?)";
    var feeddata = await dB.query(query, [name, feedback, id]);
    console.log(feeddata, "feeddata");
    return feeddata;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}

module.exports = {
  feedbackData,
};
