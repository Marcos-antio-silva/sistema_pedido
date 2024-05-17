const Funcionario =require('../resources/funcionarioR');

//registro
exports.getCriar = async (req, res, next) => {
    try{
        return res.send('rederizou o form de cadastro')
    }catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    try{
        let resultado = await Funcionario.autenticar();
        if (!Funcionario){
            let funcionario = await Funcionario.criar(req.body)
            return res.json(funcionario);
        } else {
            return res.json(
                {erro: 'funcionario ja existe'}
            )
        }
    }catch (err){
        next (err);
    }
}

exports.buscarTodos = async(req, res, next) => {
    try{
        const todos = await Funcionario.buscarTodos()
        return res.json(todos);
    }catch (err){
        next (err);
    }
}