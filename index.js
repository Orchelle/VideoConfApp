require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const meetingRoutes = require("./routes/meetingRoutes");

const app = express()

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use(express.json()); // To parse incoming JSON request bodies


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})