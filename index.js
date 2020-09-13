var express = require('express');
var app = express();
const settings = require('./Routes/settings')
const dashborad = require('./Routes/dashboard')
const blogs = require('./Routes/blogs')
var morgan = require('morgan')
const mongoose = require('mongoose');
const Emp = require('./Models/emp')
const bodyParser  = require('body-parser');

//Routes
app.use(morgan('combined'))
app.use('/',dashborad)
app.use('/blogs',blogs)
app.use('/settings',settings)
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/add', function(req,res) {
  const emp = new Emp({
    empName: req.body.empName,
    empEmail: req.body.empEmail,
  });
  // console.log(req.body)
  emp.save().then(val => {
    res.json({ msg: "Employee Added Successfully", val: val })
  })
})



//Database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

app.listen(8000, function () {
  console.log('Listening to Port 8000');
});