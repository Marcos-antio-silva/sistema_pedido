const mongoose = require('mongoose');
const keys = require('../../bin/kays');

module.exports.connect = async () => {
    try {
        await mongoose.connect(keys.database.connection, { useNewUrlParser: true });
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    }
};