require('dotenv').config()

const connectDB = require('./config/db')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server listening on port ${PORT}`)) // portda ishga tushir

connectDB() // db ga ulan

// Body parser ( body ni json ga o'tkazib beradi )
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*'); // => hammasini ochib qo'y
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next();
  });

app.use('/api/travel', require('./routes/travelRoutes')) // api ni ro'yxatdan o'tkazish