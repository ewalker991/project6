let express = require('express')
let router = new express.Router()
let vedicModel = require('./db/vedicModel')

//THIS KIND OF CODE GOES HERE
// router.get('/<applicable field>', (request, response) => {
//     <any CRUD operation maybe, or defining of urls, console.logs>
//      .then(() => {
//      response.json()
//      })
// })

router.get('/:category', (request, response) => {
    vedicModel.find({ category: request.params.category })
        .then((data) => {
            response.json(data)
        })
})


module.exports = router