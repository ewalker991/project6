let express = require('express')
let router = new express.Router()
let vedicRouter = require('./db/router.js')

router.use('/', vedicRouter)

module.exports = router