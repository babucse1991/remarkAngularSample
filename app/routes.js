var User   = require('./models/user');

module.exports = function(app, express) {

	var apiRoutes = express.Router(); 
		
	apiRoutes.post('/authenticate', function(req, res) {
		// find the user
		User.find({
			name: req.body.name
		}, function(err, user) {

			if (err) throw err;

			if (!user) {
				res.json({ success: false, message: 'Authentication failed. User not found.' });
			} else if (user) {

				// check if password matches
				if (user.password != req.body.password) {
					res.json({ success: false, message: 'Authentication failed. Wrong password.' });
				} else {

					// if user is found and password is right
					// create a token
					var token = jwt.sign(user, app.get('superSecret'), {
						expiresInMinutes: 1440 // expires in 24 hours
					});

					// return the information including token as JSON
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}   

			}

		});
	});
	//TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

	//TODO: route middleware to verify a token
	// check header or url parameters or post parameters for token
	/*apiRoutes.use(function(req, res, next) {

	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {

	  // verifies secret and checks exp
	  jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
	    if (err) {
	      return res.json({ success: false, message: 'Failed to authenticate token.' });    
	    } else {
	      // if everything is good, save to request for use in other routes
	      req.decoded = decoded;    
	      next();
	    }
	  });

	} else {

	  // if there is no token
	  // return an error
	  return res.status(403).send({ 
	      success: false, 
	      message: 'No token provided.' 
	  });

	}
	});*/

	apiRoutes.get('/users', function(req, res) {
		User.find({}, function(err, users) {
			res.json(users);
		});
	});   

	apiRoutes.delete('/users/:_id', function (req, res) {
		User.remove({ _id: req.params._id }, function (err, user) {
			res.json(user);
		});
	});

	apiRoutes.post('/users', function (req, res) {
		User.create(req.body , function (err, follow) {
			if (err){
				res.send({'error':'Alredy Followed'});
			}else{
				res.send({'success':'successfully Followed'});
			}
		});

	});
	
	app.use('/api', apiRoutes);

};