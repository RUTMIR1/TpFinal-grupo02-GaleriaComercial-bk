const mongoose = require('mongoose');
const {Schema} = mongoose;
const PromocionSchema = new Schema({
    pathing:{type:String, required: true},
    descripcion:{type:String, required: true}
})

module.exports = mongoose.models.Promocion || mongoose.model('Promocion', PromocionSchema);