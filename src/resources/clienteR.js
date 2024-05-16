require('../modls/cliente');
const mongoose = require('mongoose');
const modelo = mongoose.model('cliente');

class Cliente {
    static async criar(dados) {
        return await new modelo(dados).save();
    }
    
    static async buscar_todos() {
        return await modelo.find({});
    }
    
    static async buscar_porId(id) {
        return await modelo.findOne({ _id: id });
    }

    static async atualizar(id, dados) {
        return await modelo.findOneAndUpdate({ _id: id }, { set: dados});
    }

    static async deletar(id) {
        return await modelo.findByIdAndRemove(id);
    }
}

module.exports = Cliente;