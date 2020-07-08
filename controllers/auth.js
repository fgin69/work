const employer = require('../models/employer')
const worker = require('../models/worker')
module.exports = {
	async auth(req,res){
		res.render('auth/login', {
			title: "Авторизация",
			isLogin: true
		})
	},
	async logout(req,res){
		req.session.destroy(() => {
			res.redirect('/auth/login#login')
		})
	},
	async postlog(req,res){
		req.session.isAuth = true
		res.redirect('/')
	},
	async register(req,res) {
		
	}
}