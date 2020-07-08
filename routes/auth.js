const {Router} = require('express')
const router = Router();
const auth = require('../controllers/auth');
router.get('/auth/login', auth.auth);
router.get('/auth/logout', auth.logout);
router.post('/auth/login', auth.postlog);
router.post('/register', auth.register)
module.exports = router