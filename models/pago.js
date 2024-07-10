const mongoose = require('mongoose');
const {Schema} = mongoose;
const usuario = require('./usuario');
const PagoSchema = new Schema({
    monto:{type: Number, required: true},
    estado:{type: String, required: true},
    fecha:{type: Date, required: true},
    usuario:{type: Schema.Types.ObjectId, ref: usuario, required: true}
})
module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);