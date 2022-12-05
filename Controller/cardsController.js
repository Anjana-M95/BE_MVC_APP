// const combine = require("../Model/explore");

const cardsModel = require("../Model/cardsModel");
async function cardsControl(req, res) {
  const token = req.headers.authorization;
  console.log("controller");
  try {
    const cardsValue = await cardsModel.cardsMode();
    // const cardsValue = await combine.combineModel();
    console.log(cardsValue, "res");
    if (cardsValue) {
      res.status(200).send({
        success: true,
        value: [cardsValue],
        auth: true,
        //token: token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = {
  cardsControl,
};
