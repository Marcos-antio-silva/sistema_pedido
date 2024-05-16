const Cliente = require('../controler/cliente');
const express = require("express");
const router = express.Router();

router.get('/',Cliente.getCriar);
router.post('/',Cliente.postCriar);

module.exports = router


