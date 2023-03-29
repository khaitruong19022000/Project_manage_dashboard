const express = require('express')

const router = express.Router();

router.get('/about' , (req , res , next) => {
    res.render('frontend/page/contacts/about')
})

router.get('/service' , (req , res , next) => {
    res.render('frontend/page/contacts/service')
})

router.get('/team' , (req , res , next) => {
    res.render('frontend/page/contacts/team')
})

router.get('/team_detail' , (req , res , next) => {
    res.render('frontend/page/contacts/team_detail')
})

router.get('/architecture' , (req , res , next) => {
    res.render('frontend/page/collection/architecture')
})

module.exports = router;