const express = require('express');
const NovedadCtrl = require('../controllers/novedad.controller');
const route = express.Router();

route.get('/', NovedadCtrl.getNovedades);
route.post('/', NovedadCtrl.createNovedad);
route.get('/:id', NovedadCtrl.getNovedad);
route.put('/:id', NovedadCtrl.updateNovedad);
route.delete('/:id', NovedadCtrl.deleteNovedad);

module.exports = route;