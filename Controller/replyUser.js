const replyUser = require("../Model/replyUser");
async function replyUserReview(req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const reply = req.body.reply;
  console.log("controllerreply");
  try {
    if (name === "" || reply === "") {
      return res.status(401).send({
        success: false,
        msg: "invalid credentials",
      });
    }
    const userReply = await replyUser.replyReview(name, reply, id);
    console.log("result", userReply);
    if (userReply) {
      res.status(200).send({ success: true, value: userReply });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false, msg: "invalid credentials" });
  }
}
module.exports = { replyUserReview };
