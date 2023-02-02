const {response, request} = require('express');

const usuarioGet = (req = request, res = response)=>{
    const query = req.query;
    res.json({
        msg:'hola mundo get - controlador',
        query
    });
};
const usuarioPost = (req, res = response)=>{
    res.json({
        msg:'hola mundo post - controlador'
    });
};
const usuarioPut = (req, res = response)=>{
    const id = req.params.id;
    res.json({
        msg:'hola mundo put - controlador',
        id
    });
};
const usuarioPatch = (req, res = response)=>{
    res.json({
        msg:'hola mundo patch - controlador'
    });
};
const usuarioDelete = (req, res = response)=>{
    res.json({
        msg:'hola mundo delete - controlador'
    });
};

module.exports={
    usuarioGet,
    usuarioPut,
    usuarioDelete,
    usuarioPatch,
    usuarioPost
}