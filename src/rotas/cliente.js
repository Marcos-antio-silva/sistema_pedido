const Cliente = require ('../controler/cliente');
const app = require("express");
const router = app.Router();

router.get('/',Cliente.getCriar);
router.get('/todos', Cliente.buscarTodos)
router.post('/',Cliente.postCriar);

module.exports = router


