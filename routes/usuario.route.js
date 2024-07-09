const UsuarioCtrl = require('../controllers/usuario.controller');
const express = require('express');
const route = express.Router();

route.post('/', UsuarioCtrl.createUsuario);
route.get('/',UsuarioCtrl.getUsuarios);
route.get('/tipo', UsuarioCtrl.getUsuariosByPerfil);
route.get('/:id', UsuarioCtrl.getUsuarioById);
route.put('/:id', UsuarioCtrl.updateUsuario);
route.delete('/:id', UsuarioCtrl.deleteUsuario);
route.post('/login', UsuarioCtrl.loginUsuario);

module.exports = route;