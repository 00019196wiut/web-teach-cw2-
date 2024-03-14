require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use("", require('./router/index'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})