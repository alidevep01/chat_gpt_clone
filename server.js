const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded("extended:false"));
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} on ${PORT}`.bgBlue.white
  );
});
