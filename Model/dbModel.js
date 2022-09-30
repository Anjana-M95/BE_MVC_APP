const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userDB",
});
connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Database Connected successfully");
  }
});

connection.query("select * from orders", function (err, result) {
  if (err) {
    throw err;
  }
  console.log("Result: " + JSON.stringify(result));
});
module.exports = {
  connection,
};
