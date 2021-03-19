let express = require('express')
let router = new express.Router()
let vedicModel = require('./db/vedicModel')

router.get('/', (request, response) => {
    vedicModel.find({})
        .then((data) => response.json(data))
})

router.get('/:category', (request, response) => {
    vedicModel.find({ category: request.params.category })
        .then((data) => {
            response.json(data)
        })
})


module.exports = router