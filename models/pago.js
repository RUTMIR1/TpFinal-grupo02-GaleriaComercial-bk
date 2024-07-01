const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagoSchema = new Schema({
    monto:{type: Number, required: true},
    tipo:{type: String, required: true},
    fecha:{type: Date, required: true}

})
module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);