const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true},
  apellido:{type:String, required: true},
  email: { type: String, required: true},
  username: {type:String, required: true},
  password: { type:String, required: true },
  telefono: {type:Number, required: true},
  perfil: {type: String, required: true}
});

module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);