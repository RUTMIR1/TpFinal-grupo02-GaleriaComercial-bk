const express = require('express');
const LocalCtrl = require('../controllers/local.controllers');
const route = express.Router();

route.get('/', LocalCtrl.getLocales);
route.get('/:id', LocalCtrl.getLocal);
route.post('/', LocalCtrl.createLocal);
route.put('/:id', LocalCtrl.updateLocal);
route.delete('/:id', LocalCtrl.deleteLocal);

module.exports = route;