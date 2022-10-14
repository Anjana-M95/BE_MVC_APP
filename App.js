const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./Router/auth");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.listen("3001", () => {
  console.log("server started on port 3001");
});

app.use("/auth", authRouter);
