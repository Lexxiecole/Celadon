// Brining in all of the dependencies
const express = require('express')
const PORT = process.env.PORT || 3030
const app = express()
const routes = require('./controllers/controller')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Setting up static file use
app.use(express.static(__dirname + '/assets'))

app.use(routes)

app.listen(PORT, function () {
    console.log('Server listening on PORT: ' + PORT)
})