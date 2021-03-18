let mongoose = require('mongoose')

let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect("mongodb://localhost/project6", mongooseConnectionConfig)