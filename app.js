var express = require('express');
var expressHandlebars = require('express-handlebars');
var app = express();

var PORT = process.env.NODE_ENV || 3000;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ 
{name: 'vanilla', price: 10, awesomeness: 3},
{name: 'chocolate', price: 4, awesomeness: 8},
{name: 'banana', price: 1, awesomeness: 1}, 
{name: 'greentea', price: 5, awesomeness: 7}, 
{name: 'jawbreakers', price: 6, awesomeness: 2}, ];

app.get('/icecream/vanilla', function(req, res){
  res.render('flavors', icecreams[0]);
});

app.get('/icecream/chocolate', function(req, res){
  res.render('flavors', icecreams[1]);
});

app.get('/icecream/banana', function(req, res){
  res.render('flavors', icecreams[2]);
});

app.get('/icecream/greentea', function(req, res){
  res.render('flavors', icecreams[3]);
});

app.get('/icecream/jawbreakers', function(req, res){
  res.render('flavors', icecreams[4]);
});

app.listen(PORT, function(){
  console.log('listening on '+PORT);
});