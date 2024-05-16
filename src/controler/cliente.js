const Cliente = require('../resources/clienteR');

exports.getCriar = async (req, res, next) => {
    try{
        return res.send('rederizou o form de cadastro')
    }catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    try{
        const cliente = await Cliente.criar (req.body)
        return res.json(cliente);
    }catch (err){
        next (err);
    }
}