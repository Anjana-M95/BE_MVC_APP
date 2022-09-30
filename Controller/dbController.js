const dbModel = require("../Model/dbModel");

const db_connection = (req, res) => {
  res.send("database is ready");
};
module.exports = {
  db_connection,
};
