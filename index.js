// 1. imports
const express = require("express")
const cors = require('cors');
const app = express()

// Use CORS middleware
app.use(cors());

require("dotenv").config();

// import db
const connectDB = require('./config/db')

// 2. Middlewares
// Database
connectDB()
// Queries and answer are in JSON
app.use(express.json())

// 3. Routes
app.use("/books", require("./routes/books"))
app.use("/orders", require("./routes/orders"))

// 4. Server
app.listen(process.env.PORT, () => {
    console.log(`Server working on ${process.env.PORT}`);
    
})