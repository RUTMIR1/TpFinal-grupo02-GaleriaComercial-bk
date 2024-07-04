const mongoose = require('mongoose');
const promocion = require('./promocion');
const {Schema} = mongoose;
const LocalSchema = new Schema({
    superficie: {type: Number, required: true},
    habilitado: {type: Boolean, required: true},
    pathimages: {type: String, required: true},
    alquilado: {type: Boolean, required: true},
    promocion:{type: Boolean, required: true},
    costoMes: { type: Number, required: true },
    promociones: [{type: Schema.Types.ObjectId, ref: promocion, required: false}]
});

module.exports = mongoose.models.Local || mongoose.model('Local', LocalSchema);
