const express = require('express')

const router = express.Router();

router.get('/' , (req , res , next) => {
    res.render('frontend/page/home')
})

module.exports = router;