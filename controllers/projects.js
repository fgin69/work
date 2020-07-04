module.exports = {
	projects(req,res)  {
		res.render('projects', {
			title: 'Текущие проекты',
			isProjects: true
		})
	},
	add(req,res) {
		res.render('add', {
			title: 'Добавить проект',
			isAdd: true
		})
	},
	home(req, res){
		res.render('home', {
			title: 'Главная страница',
			isHome: true
		});
	},
	 async addproject(req,res) {
		try{
			
		}catch (e) {console.log(e)}
	}
}
