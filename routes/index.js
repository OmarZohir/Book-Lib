const express = require('express')
const router  = express.Router()


//req/res: request/response
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router