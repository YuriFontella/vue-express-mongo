const express = require('express')
const path = require('path')

app = express()
app.use(express.static(__dirname))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

const compression = require('compression')
app.use(compression())

const port = process.env.PORT || 5000
app.listen(port)
