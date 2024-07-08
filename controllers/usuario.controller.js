const Usuario = require('./../models/usuario');

const UsuarioCtrl = {}

UsuarioCtrl.createUsuario = async (req, res) => {
    var usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(201).json({
            'status': 1,
            'msg': "Usuario creado correctamente",
        });
    } catch (err) {
        res.status(400).json({
            'status': 0,
            'msg': "error al intentar realizar la operacion",
            'error': err
        });
    }
}

UsuarioCtrl.updateUsuario = async (req, res) => {
    var usuario = new Usuario(req.body);
    try {
        await Usuario.updateOne({ _id: req.params.id }, usuario)
        res.status(200).json({
            'status': 1,
            'msg': "se actualizo el usuario correctamente"
        });
    } catch (err) {
        res.status(400).json({
            'status': 0,
            'msg': "error al intentar realizar la operacion",
            'error': err
        });
    }
}

UsuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        await Usuario.deleteOne({ _id: req.params.id });
        res.status(200).json({
            'status': 1,
            'msg': "se elimino el usuario correctamente"
        });
    } catch (err) {
        res.status(400).json({
            'status': 0,
            'msg': "error al intentar realizar la operacion",
            'error': err
        });
    }
}

UsuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
}

UsuarioCtrl.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ _id: req.params.id });
        res.status(200).json(usuario);
    } catch (err) {
        res.status(400).json({
            'status': 0,
            'msg': "error al intentar realizar la operacion",
            'error': err
        });
    }
}

UsuarioCtrl.loginUsuario = async (req, res) => {
    const criteria = {
        username: req.body.username,
        password: req.body.password
    }
    try {
        const user = await Usuario.findOne(criteria);
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            })
        } else {
            res.json({
                status: 1,
                msg: "success",
                username: user.username, //retorno información útil para el frontend
                perfil: user.perfil, //retorno información útil para el frontend
                userid: user._id //retorno información útil para el frontend
            })
        }
    } catch (error) {
        res.json({
            status: 0,
            msg: 'error'
        })
    }
}

UsuarioCtrl.getUsuariosByPerfil = async (req, res)=>{
    try {
        const usuarios = await Usuario.find({ perfil: req.params.pf});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({
            'status': 0,
            'msg': "error al intentar realizar la operacion",
            'error': err
        });
    }
}


module.exports = UsuarioCtrl;