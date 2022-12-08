const makeDb = require("../Connect/dataBase");

async function fileData(id) {
  console.log(id, "id");
  const dB = makeDb();
  try {
    const resume = "SELECT * FROM CAREER WHERE ID=?";
    const resumePdf = await dB.query(resume, [id]);
    console.log(resumePdf, "resumeModel");
    return resumePdf;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = {
  fileData,
};
