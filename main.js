const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoconfig = require('config');
const database = require('./custom/db') ()
const session = require('express-session')
const MonsgoUsers = require('connect-mongodb-session') (session)
const path = require('path');
const exphbs = require('express-handlebars');
const projectsRoutes = require('./routes/projects');
const authRoutes = require('./routes/auth');
const varMiddleware = require('./middleware/variables')

const hbs = exphbs.create({
	defaultLayout: "main",
	extname: "hbs",
	hbsHelpers: require('./custom/hbs-helpers')
})

const store = new MonsgoUsers({
	collection: 'sessions',
	uri: mongoconfig.mongo
})
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}));
app.use(session({
	secret: mongoconfig.session_key,
	resave: false,
	saveUninitialized: false,
	store
}))
app.use(varMiddleware)

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(projectsRoutes);
app.use(authRoutes);


app.listen(mongoconfig.port, () => {
	console.log("Server started on port:", mongoconfig.port);
})