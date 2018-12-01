const mongoose = require('mongoose')
// API Node Promise to API mongoose Promise
mongoose.Promise = global.Promise
//module.exports = mongoose.connect('mongodb://localhost/dbjewels')
const url = process.env.MONGOLAB_URI ?  process.env.MONGOLAB_URI : 'mongodb://localhost/dbjewels'
module.exports = mongoose.connect(url, {useMongoClient: true})
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."