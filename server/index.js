const path = require('path')

const express = require('express')

const routes = require('./routes')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', routes)

app.listen(PORT, (err) => {
  if (err) throw new Error
  else console.log(`listening at http://localhost:${PORT}`)
})
