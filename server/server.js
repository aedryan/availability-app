(function(){

	// Node modules
	const express = require('express');
	const compress = require('compression');
	const cookieParser = require('cookie-parser');
	const bodyParser = require('body-parser');
	const session = require('express-session');
	const mongoose = require('mongoose');
	const io = require('socket.io');

	// My modules
	const passport = require('./config/passport');
	const pageRoutes = require("./routes/page-routes");
	const authRoutes = require("./routes/auth-routes");
	const dbRoutes = require("./routes/db-routes");

	// Create server
	const app = express();

	// Connect to db
	mongoose.connect(process.env.MONGODB_URI);

	// Set server setting
	app.set('port', (process.env.PORT || 5000));

	// Set server middleware
	app.use(compress());
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(session({ secret: 'availability-app', resave: true, saveUninitialized: true }));
	app.use(passport.initialize());
	app.use(passport.session());

	// Set server static files
	app.use('/favicon.ico', express.static("favicon.ico"));
	app.use(express.static('public/'));
	
  	authRoutes(app, passport);
	dbRoutes(app);
	pageRoutes(app);

  	// Start server
  	const server = app.listen(app.get('port'), () => {
		console.log("App is running", app.get('port'));
  	});

	const socket = io(server);
	socket.on('connection', (socket) => {
		socket.on('player event', (data) => {
			socket.broadcast.emit('receive player', data);
		});

		socket.on('doc event', (data) => {
			socket.broadcast.emit('receive doc', data);
		});
	});

})();