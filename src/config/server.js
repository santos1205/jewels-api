const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = process.env.PORT || 3000

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.get('/', function(req, res) {
    res.send('Welcome to NodeJS App on Heroku apis!!')
})

server.listen(port , function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
