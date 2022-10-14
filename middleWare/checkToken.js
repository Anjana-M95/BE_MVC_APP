const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  // console.log(req);
  const token = req.body.headers.authToken;
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  console.log(jwtSecretKey);
  console.log(token, "vtoken");
  console.log("middleware");
  if (!token) {
    res.send("need token");
  } else {
    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      console.log(decoded);
      if (err) {
        res.json({ auth: false, msg: "failed" });
      }
      next();
    });
  }
}
module.exports = { verifyJWT };
