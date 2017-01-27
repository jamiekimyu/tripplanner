var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var env = nunjucks.configure('.views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var path = require('path');
var db = require('./models');

module.exports = app;

// var server = app.listen(3000, function(){
//     console.log('listening on port 3000');
// });

//var makeRouter = require('./routes/tripplanner.js');

app.use(volleyball);
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use('/', makeRouter);

app.get('/', function(req, res, next){
    res.send('hello');
})

db.sync().then(function(){
    app.listen(3000, function(){
        console.log('listening on port 3000');
    })    
});


