const {Router} = require('express');
const projects = require('../controllers/projects');
const router = Router()

router.get('/projects', projects.projects);
router.get('/add', projects.add);
router.get('/', projects.home);
router.post('/add', projects.addproject )
router.get('/profile', projects.profile)

module.exports = router