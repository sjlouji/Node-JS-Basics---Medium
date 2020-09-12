const express = require('express')

let app = express.Router()

app.get('/', function (req, res) {
    res.send('Settings Page');
});

app.get('/profile', function (req, res) {
    res.send('Profile Page');
});

module.exports = app