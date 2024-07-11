const pago = require('./pago');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const CuotaSchema = new Schema({
    numeroCuota: {type: Number, required:true},
    monto: {type: Number, required: true},
    fechaCuota: {type: Date, required: true},
    fechaVencimiento: {type: Date, required: true},
    estado: {type: String, required: true},
    pago: [{type: Schema.Types.ObjectId, ref: pago, required: false}]
});

module.exports = mongoose.models.Cuota || mongoose.model('Cuota', CuotaSchema);