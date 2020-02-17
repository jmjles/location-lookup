const express = require('express')
const app = express()
const KeyRoute = require('./routes/keys')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT

const middleware = [express.json(),cors()]

app.use(middleware)
app.use('/api',KeyRoute)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../react-portfolio/build")));
}
app.listen(port,()=> console.log(`\nServer is running on port:${port}`))