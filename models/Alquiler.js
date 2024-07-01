const mongoose = require('mongoose');
const {Schema} = mongoose;
const AlquilerSchema = new Schema({
    superficie: {type: Number, required: true},
    habilitado: {type: Boolean, required: true},
    costomes: {type: Boolean, required: true},
    pathimages: {type: String, required: true},
    alquilado: {type: Boolean, required: true},
    promocion:{type: Boolean, required: true},
    costoMes: { type: Schema.Types.ObjectId, ref: Pago, required: true },

})

module.exports = mongoose.models.Alquiler || mongoose.model('Alquiler', AlquilerSchema);