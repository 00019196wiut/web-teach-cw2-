const express = require('express')
const fs = require('fs')

function id () {
    Math.floor(Math.random() * 100)
}

class marketController {
    homepage(req,res) {
        res.render('index')
    }
}