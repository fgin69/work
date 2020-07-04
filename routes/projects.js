const {Router} = require('express');
const { home, add } = require('../controllers/projects');
const projects = require('../controllers/projects');
const router = Router()
const controllers = require('../controllers/projects')

router.get('/projects', projects.projects);
router.get('/add', projects.add);
router.get('/', projects.home);
router.post('/add', projects.addproject )

module.exports = router