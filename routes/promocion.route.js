const promocionCtrl = require ('../controllers/promocion.controllers');

const express = require('express');
const router = express.Router();

router.get('/', promocionCtrl.getPromociones);
router.post('/', promocionCtrl.createPromocion);
router.get('/:id', promocionCtrl.getPromocion);
router.put('/:id', promocionCtrl.editPromocion);
router.delete('/:id', promocionCtrl.deletePromocion);

module.exports = router;