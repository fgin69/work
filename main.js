const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
const exphbs = require('express-handlebars');
const profileRoutes = require('./routes/profile')
const projectsRoutes = require('./routes/projects')

const hbs = exphbs.create({
	defaultLayout: "main",
	extname: "hbs"
})

app.use(express.static(path.join(__dirname,'public')))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', 'views') 
app.use(profileRoutes);
app.use(projectsRoutes);






app.get('/login', (req,res) => {
	res.render('auth/login', {
		title: 'Войти',
		isLogin: true
	})
})



app.listen(PORT, () => {
	console.log(`server started...${PORT}`)
}) ;