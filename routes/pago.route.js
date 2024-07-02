const pagoCtrl = require ('../controllers/pago.controllers');
const express = require('express');
const router = express.Router();

router.get('/', pagoCtrl.getPagos);
router.post('/', pagoCtrl.createPago);
router.get('/:id', pagoCtrl.getPago);

module.exports = router;