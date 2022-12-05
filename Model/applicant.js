const makeDb = require("../Connect/dataBase");
async function applicantTableData() {
  const dB = makeDb();
  try {
    var applicantListQuery = "SELECT * FROM CAREER";
    var applicantData = await dB.query(applicantListQuery, []);
    console.log(applicantData, "applicantData");
    return applicantData;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  applicantTableData,
};
