const CuotaCtrl = require('../controllers/cuota.controllers');
const express = require('express');
const route =express.Router();

route.get('/', CuotaCtrl.getCuotas);
route.post('/', CuotaCtrl.createCuota);
route.put('/:id', CuotaCtrl.updateCuota);
route.delete('/:id', CuotaCtrl.deleteCuota);

module.exports = route;