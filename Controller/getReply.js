const getReply = require("../Model/getReply");

async function userReply(req, res) {
  const id = req.query.fb_id;
  const drid = req.query.dr_id;
  console.log("controllerreplyall", id, drid);
  try {
    const allReply = await getReply.allUserReply(id, drid);
    console.log("allReply", allReply);
    if (allReply) {
      res.status(200).send({ success: true, value: allReply });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false });
  }
}
module.exports = {
  userReply,
};
