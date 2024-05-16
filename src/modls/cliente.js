// const smc = require('simple-mongoose-creator');

// smc.smc('cliente',{ 
//     nome:{
//         type: String,
//         require: true,
//         //trim pros espaços 
//         trim : true
//     },
//     telefone:{
//         type: String,
//         require: true
//     }
// });
// module.exports = smc; 
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const smc = new Schema({
    nome: {
        type: String,
        required: true,
        trim : true
    },
    telefone: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('cliente',smc)