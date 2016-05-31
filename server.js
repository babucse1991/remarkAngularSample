
var express = require('express')
  , app = express();
  
var multer  = require('multer');
var bodyParser = require('body-parser');
var http = require('http');
var server = http.createServer(app);
var path = require('path');
var morgan      = require('morgan');
var jwt    = require('jsonwebtoken'); 

var port = process.env.PORT || 3000; 

app.listen(port);

//app.set('superSecret', database.secret); 
//Note : for remote MongoDB connection.
//mongoose.connect(database.remoteUrl);

app.use(express.static(__dirname + '/public')); 
app.get('/index', function(req, res) {
	res.sendfile('./public/index.html'); 
});
//app.use(morgan('dev'));

 //require('./app/routes')(app, express);

/*app.get('/setup', function(req, res) {

	  // create a sample user
	  var nick = new User({ 
	    name: 'Nick Cerminara', 
	    password: 'password',
	    admin: true 
	  });

	  // save the sample user
	  nick.save(function(err) {
	    if (err) throw err;

	    console.log('User saved successfully');
	    res.json({ success: true });
	  });
});*/
 
exports = module.exports = app;     
console.log('Magic happens at http://localhost:' + port);



