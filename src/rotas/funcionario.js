const Funcionario = require('../controler/funcionario');
const express = require('express');
const router = express.router();

router.get('/', Funcionario.getCriar);
router.get('/todos'), Funcionario.brusacarTodos;
router.post('/', funcionario.postCriar);

module.exports = router 