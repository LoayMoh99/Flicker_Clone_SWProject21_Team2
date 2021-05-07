const express = require('express')
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const routes = require('./routes/v1')

const app = express()

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

app.use(mongoSanitize())

// enable cors
app.use(cors())
app.options('*', cors())

// simple route
app.get("/test", (req, res) => {
    res.json({ message: "Welcome to dropoids application." });
  });
  
// v1 api routes
app.use('/api/v1',routes);
// app.listen(3000,(err)=>{
//     console.log("start list");
    
// });

app.use('/photos',express.static('photos')); // makes the photos folder available for everyone

module.exports = app
