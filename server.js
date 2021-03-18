let app = require('./app.js')
let server = app.listen(9000)

server.on('listening', () => console.log("Server is listening..."))
server.on('error', error => console.error("OH NO I'M BROKEN", error))

module.exports = server