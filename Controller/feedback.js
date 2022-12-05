// const combine = require("../Model/explore");

const feedback = require("../Model/feedback");
async function feedbackControl(req, res) {
  console.log("controller");
  try {
    const feedbackValue = await feedback.feedbackModel();
    console.log(feedbackValue, "res");
    if (feedbackValue) {
      res.status(200).send({
        success: true,
        value: feedbackValue,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = {
  feedbackControl,
};
