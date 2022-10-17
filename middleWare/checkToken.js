const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  console.log("req", req);
  const token = req.body.headers.authorization;
  console.log("toke", token);
  if (!token) {
    res.send("need token");
  } else {
    const logtoken = token.split(" ")[1];
    jwt.verify(logtoken, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({ auth: false, msg: "failed" });
      }
      next();
    });
  }
}
module.exports = { verifyJWT };
