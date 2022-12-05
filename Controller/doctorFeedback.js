const doctorFeedback = require("../Model/doctorFeedback");

async function feedback(req, res) {
  const id = req.query.doctorId;
  console.log(id, "id");
  try {
    const feedbacks = await doctorFeedback.feedbackReply(id);
    console.log("feedbacks", feedbacks);
    if (feedbacks) {
      res.status(200).send({ success: true, value: feedbacks });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false });
  }
}
module.exports = {
  feedback,
};
