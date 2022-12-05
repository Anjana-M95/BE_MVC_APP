const getFeedback = require("../Model/getFeedback");

async function fetchFeedback(req, res) {
  const id = req.query.id;
  console.log("controller", id);
  try {
    const value = await getFeedback.feedbackOne(id);
    console.log(value, "res");
    if (value) {
      res.status(200).send({
        success: true,
        value: value,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = { fetchFeedback };
