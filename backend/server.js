const express = require("express");
const { errorHandler } = require("./Middlewares/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require('./Routes/goalRoutes')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/goals/", goalRoutes);
app.use(errorHandler)

app.listen(port, () => console.log(`Server Started on ${port}`));
