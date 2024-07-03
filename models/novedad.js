const mongoose = require('mongoose');
const usuario = require('./usuario');
const {Schema} = mongoose;

const NovedadSchema = new Schema({
    descripcion: {type:String, required:true},
    estado: {type: String, required: true},
    usuario: {type: Schema.Types.ObjectId, ref: usuario, required:true}
});

module.exports = mongoose.models.Novedad || mongoose.model('Novedad', NovedadSchema);