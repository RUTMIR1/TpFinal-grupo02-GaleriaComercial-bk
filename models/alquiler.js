const mongoose = require('mongoose');
const local = require('./local');
const cuota = require('./cuota');
const usuario = require('./usuario');
const {Schema} = mongoose;
const AlquilerSchema = new Schema({
    propietario:{ type: Schema.Types.ObjectId, ref: usuario, required: true },
    local:{ type: Schema.Types.ObjectId, ref: local, required: true },
    costoAlquiler:{type: Number, required: true},
    fechaAlquiler:{type: Date, required: true},
    fechaVencimiento:{type: Date, required: true},
    plazoMes:{type: Number, required: true},
    cuotas: [{type: Schema.Types.ObjectId, ref: cuota, required: true}]
    //pago: { type: Schema.Types.ObjectId, ref: pago, required: true },
})

module.exports = mongoose.models.Alquiler|| mongoose.model('Alquiler', AlquilerSchema);