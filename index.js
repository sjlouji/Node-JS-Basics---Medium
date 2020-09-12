var express = require('express');
var app = express();
const settings = require('./Routes/settings')
const dashborad = require('./Routes/dashboard')
const blogs = require('./Routes/blogs')
var morgan = require('morgan')

app.use(morgan('combined'))
app.use('/',dashborad)
app.use('/blogs',blogs)
app.use('/settings',settings)


app.listen(8000, function () {
  console.log('Listening to Port 8000');
});