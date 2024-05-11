const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedido = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente',
        required: true
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'funcionarios',
        required: true
    },
    pizza: {
        type: String,
        required: true,
        trim: true
    },
    bebida: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Pedido', pedido);