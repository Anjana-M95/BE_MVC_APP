const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./Router/auth");

const app = express();
app.use(morgan("dev"));
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRouter);

app.listen("3001", () => {
  console.log("server started on port 3001");
});
