const feedbackForm = require("../Model/feedbackForm");

async function feedbackFormData(req, res) {
  console.log("controllerfb");
  const name = req.body.username;
  const feedback = req.body.addedFeedback;
  const id = req.body.id;
  try {
    if (name === "" || feedback === "") {
      return res.status(401).send({
        success: false,
        msg: "invalid credentials",
      });
    }

    const formData = await feedbackForm.feedbackData(name, feedback, id);
    console.log("result", formData);
    if (formData) {
      res.status(200).send({ success: true, value: formData });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false, msg: "invalid credentials" });
  }
}
module.exports = {
  feedbackFormData,
};
