const makeDb = require("../Connect/dataBase");
async function resumeDataEntry(name, phone, email, address, resume) {
  console.log(name, phone, email, address, resume);
  const dB = makeDb();
  try {
    var applicantListQuery =
      "INSERT INTO career (name,phone,email,address,resume) VALUES (?,?,?,?,?)";
    var applicantData = await dB.query(applicantListQuery, [
      name,
      phone,
      email,
      address,
      resume,
    ]);
    console.log(applicantData, "applicantData");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  resumeDataEntry,
};
