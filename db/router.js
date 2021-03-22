let express = require('express')
let router = new express.Router()

let controller = require('./controller.js')



router.get('/', controller.readAll)
router.get('/:category', controller.readAll)
router.post('/:word', controller.create)
router.put('/:word', controller.update)
router.delete('/:category', controller.destroy)


module.exports = router