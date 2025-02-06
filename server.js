const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
//MiddleWare
const errorHandler = require("./middelwares/errorMiddleware");
//routes Path
const authRoutes = require("./routes/authRoute");

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
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

//API Routes
app.use("/api/v1/auth", authRoutes);

//listen server
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} on ${PORT}`.bgBlue.white
  );
});
