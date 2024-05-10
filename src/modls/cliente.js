const smc = require('simple-mongoose-creator');
smc.smc('clientes',{ 
    nome:{
        type: String,
        require: true,
        //trim pros espaços 
        trim : true
    },
    telefone:{
        type: String,
        require: true
    }
});
module.exports = smc; 