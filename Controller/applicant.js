const applicant = require("../Model/applicant");

async function applicantData(req, res) {
  console.log("applicantData");
  try {
    const resumeData = await applicant.applicantTableData();
    console.log(resumeData, "resumeData");
    if (resumeData) {
      res.status(200).send({ success: true, value: resumeData });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false });
  }
}
module.exports = {
  applicantData,
};
