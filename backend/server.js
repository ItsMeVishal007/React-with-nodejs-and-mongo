const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/router');
const cors = require('cors');
const app = express()
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)





app.listen(4000, () => {
  console.log(`The server is running at http://localhost:${4000}`)
})