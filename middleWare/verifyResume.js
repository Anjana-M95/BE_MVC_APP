const multer = require("multer");
console.log("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const resumeUpload = multer(
  { storage: storage },
  { limits: { fileSize: 2044 } }
).single("resume");
module.exports = resumeUpload;
