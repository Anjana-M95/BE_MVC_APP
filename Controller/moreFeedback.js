const moreFeedback = require("../Model/moreFeedback");

async function addfeedData(req, res) {
  console.log(req, "req");
  const feedback = req.body.feedback;
  const id = req.body.id;

  console.log("controller", id);
  try {
    if (feedback === "") {
      return res.status(401).send({
        success: false,
        msg: "check if there is input",
      });
    }

    const value = await moreFeedback.addFeedback(feedback, id);
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
module.exports = { addfeedData };
