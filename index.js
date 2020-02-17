const express = require('express')
const app = express()
const KeyRoute = require('./routes/keys')

require('dotenv').config()

const port = process.env.PORT

const middleware = [express.json()]

app.use(middleware)
app.use('/api',KeyRoute)

app.listen(port,()=> console.log(`\nServer is running on port:${port}`))