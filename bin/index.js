//criando 
const express = require ('express');
const bp = require ('body-parser');
const app = express();

//parser 
app.use [bp.json({limit:'10 mb'})];
app.use[bp.urlencoded({extended: false})];

//front 
app.set('view engine', 'ejs');
app.set('views', 'views');

//estaticos
app.use [express.static('public')];

const cliente_route = require('../src/rotas/cliente');
app.use('/cliente', cliente_route);

//rota padrao 
app.use('/', (req, res) => {
    res.render('index');
});

//exportar
module.exports = app