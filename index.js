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
  app.use(express.static('client/build'));

  app.get('*', (req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.listen(port,()=> console.log(`\nServer is running on port:${port}`))