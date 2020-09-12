const express = require('express')

let app = express.Router()

app.get('/', function (req, res) {
    res.send('Dashboard Page');
});

module.exports = app