let express = require('express')
let router = new express.Router()
let vedicRouter = require('./db/router.js')
let vedicModel = require('./db/vedicModel')


router.get('/', (request, response) => {
    vedicModel.find({})
        .then((data) => response.json(data))
})

router.use('/', vedicRouter)

module.exports = router