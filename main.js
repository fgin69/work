const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const mongoconfig = require('config');
const database = require('./custom/db') ()

const path = require('path');
const exphbs = require('express-handlebars');
const profileRoutes = require('./routes/profile')
const projectsRoutes = require('./routes/projects');

const hbs = exphbs.create({
	defaultLayout: "main",
	extname: "hbs",
	hbsHelpers: require('./custom/hbs-helpers')
})

app.use(express.static(path.join(__dirname,'public')))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(profileRoutes);
app.use(projectsRoutes);






app.get('/login', (req,res) => {
	res.render('auth/login', {
		title: 'Войти',
		isLogin: true
	})
})



app.listen(mongoconfig.port, () => {
	console.log("Server started on port:", mongoconfig.port);
})