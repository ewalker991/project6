let mongoose = require('mongoose')
require('../database')

// REQUIRE YOUR MODELS OR JSONS IF APPLICABLE HERE
// EX: let housesModel = require('<file directory here>')
let vedicModel = require('./vedicModel.js')
let vedicJson = require('./vedic.json')


// YOUR CRUD OPERATIONS FOR YOUR DATA HERE
// ex: housesModel.deleteMany({})
//         .then(response => {
//             charactersModel.create(characterData)
//             .then(characters => {
//                 console.log(characters.length, "created")
//             })
//         })

vedicModel.deleteMany({})
    .then(response => {
        vedicModel.create(vedicJson)
        .then(information => {
            console.log(information, "Info gotten.")
        })
    })