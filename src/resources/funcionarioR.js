require('../modls/cliente');
const mongoose = require('mongoose');
const modelo = mongoose.model('funcionarios');
const cript = require('bcrypt')
const salt = 10

class Funcionario{
    static async criar(dados){
        let {senha} = dados;
        let rest = await cript.rest(senha, salt)
        senha = rest;
        dados.senha = senha;
        return await new modelo(dados).save();
    }

    static async autenticar (dados){
        const{matricula} = dados;
        const funcionario = await modelo.findOne({matricula});
        return funcionario;
    }

    static async buscar_todos(){
        return await modelo.find({});
    }
    static async buscar_porId(id){
        return await modelo.findOne({ _id: id });
    }
    static async atualizar(id,dados){
        return await modelo.findOneAndUpdateid(id, {set: dados});
    } 
    static async deletar(id){
        return await modelo.findOneAndRemove(id);
    }
}

module.exports = Funcionario;