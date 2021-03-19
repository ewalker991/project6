let fetch = require('node-fetch')
let fs = require('fs').promises

const url = 'https://api-vs.herokuapp.com/vs/v1/resources/all'


fetch(url)
    .then(response => response.json())
    .then(data => fs.writeFile("./vedic.json", JSON.stringify(data)))
    .then(() => console.log("Vedic write done!"))
    .catch(error => console.error(error))