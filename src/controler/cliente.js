const Cliente = require('../resources/clienteR')

exports.getCriar = async (req, res, next) => {
    try{
        return res.send('pagia - funcionario')
    }catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    console.log('dados recebidos', req.body);
    try{
        const cliente = await Cliente.criar (req.body)
        console.log('cliente criado')
        return res.json(cliente);
    }catch (err){
        next (err);
    }
}

exports.buscarTodos = async(req, res, next) => {
    try{
        const todos = await Cliente.buscarTodos()
        return res.json(todos);
    }catch (err){
        next (err);
    }
}