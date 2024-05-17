const Cliente = require ('../controler/cliente');
const app = require("express");
const router = app.Router();

router.get('/',Cliente.getCriar);
router.post('/',Cliente.postCriar);

module.exports = router


