const express = require('express')

const router = express.Router()
const AuthenController = require(`${__path_controllers}backend/authen_controller`)
 
router
    .route('/signup')
    .post(AuthenController.saveAuthen)

router
    .route('/login')
    .post(AuthenController.checkAuthen)

module.exports = router;