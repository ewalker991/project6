let vedicModel = require('./vedicModel.js')

let controller = {
    readAll(request, response) {
        vedicModel
            .find({})
            .then((data) => response.json(data))
    },
    readAll(request, response) {
        vedicModel
            .find({ category: request.params.category })
            .then((data) => response.json(data))
    },
    create(request, response) {
        let word = request.body
        vedicModel
            .create(word)
            .then(data => response.json(data))
    },
    update(request, response) {
        let description = request.body
        vedicModel 
            .findOneAndUpdate({word: request.params.word}, description, {new: true})
            .then(data => response.json(data))
    },
    destroy(request, response){
        vedicModel
            .deleteMany({category: request.params.category})
            .then(() => response.json({ok: true}))
    }
}

module.exports = controller