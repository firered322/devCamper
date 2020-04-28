const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// load env variables
dotenv.config({ path: "./config/config.env" });

// connect DB
connectDB();

// Routes
const bootcamps = require("./routes/bootcamps");

const app = express();

app.use(express.json());

// logger (dev env only)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold
  );
});
