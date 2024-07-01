const mongoose = require('mongoose');
const pago = require('./pago');
const local = require('./local');
const {Schema} = mongoose;
const AlquilerSchema = new Schema({
    propietario:{ type: Schema.Types.ObjectId, ref: propietario, required: true },
    local:{ type: Schema.Types.ObjectId, ref: local, required: true },
    costoAlquiler:{type: Number, required: true},
    fechaAlquiler:{type: Date, required: true},
    plazoMes:{type: Number, required: true},
    pago: { type: Schema.Types.ObjectId, ref: pago, required: true },

})

module.exports = mongoose.models.Alquiler|| mongoose.model('Alquiler', AlquilerSchema);