const jobResume = require("../Model/jobResume");
async function resumeEntry(req, res) {
  const name = req.body.fullName;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.Address;
  const resume = req.file;
  console.log("jRcontroller");
  const allowed_file_size = 2;

  try {
    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      address === "" ||
      resume === ""
    ) {
      return res.status(401).send({
        success: false,
        msg: "check if there is input",
      });
    }
    if (resume.size / (1024 * 1024) > allowed_file_size) {
      return res.status(401).send({
        success: false,
        msg: "File size must be less than 2mb",
      });
    }
    const applicants = await jobResume.resumeDataEntry(
      name,
      phone,
      email,
      address,
      resume.originalname
    );
    console.log(applicants, "applicants");
    if (true) {
      res.status(200).send({ success: true, value: applicants });
    }
  } catch (err) {
    console.log(err, "err");
    res.status(500).send({ success: false, msg: "invalid credentials" });
  }
}
module.exports = {
  resumeEntry,
};
