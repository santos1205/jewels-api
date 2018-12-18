const restful = require('node-restful')
const mongoose = restful.mongoose


const jewelSchema = new mongoose.Schema({
    cod: {type: String, required: true},
    tipo: {type: String, required: true, enum: ['anel', 'brinco', 'colar', 'pulseira']},
    valor: {type: Number, min: 0, required: true},
    isSold: {type: Boolean, required: [true, 'Informe a situação da venda.']}    
})

const kitJewelsSchema = new mongoose.Schema({
    cod: {type: String, required: true},
    client: {type: String, required: true},
    filter: {type: String, required: false},
    partialJewels: {type: Number, min: 0, required: [true, 'Informe a qtde parcial das jóias.']},
    totalJewels: {type: Number, min: 0, required: [true, 'Informe a qtde total das jóias.']},
    partialSell: {type: Number, min: 0, required: [true, 'Informe o valor parcial das vendas.']},
    totalSell: {type: Number, min: 0, required: [true, 'Informe o valor total das vendas.']},    
    jewels: [jewelSchema]
})

module.exports = restful.model('JewelsMap', kitJewelsSchema)