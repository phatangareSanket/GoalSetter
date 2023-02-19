const express = require("express");
const colors = require('colors')
const connectDB = require("./Config/db");
const { errorHandler } = require("./Middlewares/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require('./Routes/goalRoutes')
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/goals/", goalRoutes);
app.use(errorHandler)

app.listen(port, () => console.log(`Server Started on ${port}`.yellow.bold));
