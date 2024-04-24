if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./routers");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;


//db connection
const db = require("./db");
db.connect();

//middlwware
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());

//headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//api
app.use("/api", router);

//static resources for running frontend and backend at same time 
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));


app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Welcome to Buffer Overflow");
  }
});


//cors
app.use(cors());


//server listen
app.listen(PORT, () => {
  console.log(`Buffer Overflow API is running on PORT No- ${PORT}`);
});
