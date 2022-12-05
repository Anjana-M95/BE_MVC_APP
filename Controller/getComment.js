const getComment = require("../Model/getComment");

async function Comments(req, res) {
  console.log("controllerComment");
  const id = req.query.fb_id;
  try {
    const allComment = await getComment.CommentModel(id);
    console.log("result", allComment);
    if (allComment) {
      res.status(200).send({ success: true, value: allComment });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false });
  }
}
module.exports = {
  Comments,
};
