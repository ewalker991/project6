let express = require('express')
let router = new express.Router()
let modelName = require('./db/model')

//THIS KIND OF CODE GOES HERE
// router.get('/<applicable field>', (request, response) => {
//     <any CRUD operation maybe, or defining of urls, console.logs>
//      .then(() => {
//      response.json()
//      })
// })

router.get('/:id', (request, response) => {
    modelName.findById({ _id: request.params.id })
        .then((names) => {
            response.json(names)
        })
})


module.exports = router