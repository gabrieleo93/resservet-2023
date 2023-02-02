const express = require('express');
const { usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete  } = require('../controllers/usuariosCont');
const router = express.Router();

router.get('/', usuarioGet);

router.put('/:id', usuarioPut);
router.post('/', usuarioPost );
router.delete('/',usuarioDelete );
router.patch('/',usuarioPatch );

module.exports = router