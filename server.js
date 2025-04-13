// server.js
const express = require("express");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorHandler"); // Import the error handling middleware
const userRoutes = require("./routes/userRoutes");
const sessionConfig = require("./config/sessionConfig");
const cookieParser = require('cookie-parser');
const path = require("path");

// Connect to the database
connectDB();

// Middleware
app.use(session(sessionConfig));
// app.use(cookieParser());

// public folder
app.use(express.static("public"));
app.use(express.static( path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Specify the views directory

// Routes
app.use("/", userRoutes);

// Use the error handling middleware
app.use(notFound); // This will catch 404 errors
app.use(errorHandler); // This will catch server errors

const port = process.env.PORT || 5000;
app.listen(port, () => console.warn(`Server started running on http://localhost:${port}`));
