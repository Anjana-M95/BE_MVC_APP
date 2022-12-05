const explore = require("../Model/explore");
async function service(req, res) {
  try {
    const flag = req.query.flag;
    console.log(flag, "flag");
    const serviceData = await explore.serviceCards(flag);
    console.log("serviceData", serviceData);
    if (serviceData) {
      res.status(200).send({
        success: true,
        value: serviceData,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = {
  service,
};
