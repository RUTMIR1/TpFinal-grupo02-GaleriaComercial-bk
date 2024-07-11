const Alquiler = require("../models/alquiler");
const alquilerCtrl = {};

alquilerCtrl.getAlquileres = async (req, res) => {
  var alquileres = await Alquiler.find().populate('propietario').populate('cuotas').populate('local');
  res.json(alquileres);
};

alquilerCtrl.createAlquiler = async (req, res) => {
  var alquiler = new Alquiler(req.body);
  try {
    await alquiler.save();
    res.json({
      status: "1",
      msg: "Alquiler guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
      error: error
    });
  }
};

alquilerCtrl.getAlquiler = async (req, res) => {
  try{
    const alquiler = await Alquiler.findOne({_id: req.params.id}).populate('propietario').populate('cuotas').populate('local');
    res.status(200).json(alquiler);
  }catch(err){
    res.status(400).json({
      status: "0",
      msg: "Alquiler no encontrado.",
      error: err
    });
  }
};

alquilerCtrl.editAlquiler = async (req, res) => {
    const valquiler = new Alquiler(req.body);
    try {
    await Alquiler.updateOne({_id: req.body._id}, valquiler);
    res.json({
    'status': '1',
    'msg': 'Alquiler updated'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
    }

alquilerCtrl.deleteAlquiler = async (req, res) => {
  try {
    await Alquiler.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Alquiler removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

alquilerCtrl.getAlquileresByUserId = async (req, res)=>{
  try{
    const alquileres = await Alquiler.find({ propietario: req.params.user }).populate('propietario')
    .populate({
      path: 'cuotas',
      populate: { path: 'pago' } // Popula el campo 'pago' dentro de cada objeto de 'cuotas'
    })
    .populate('local');
    res.status(200).json(alquileres);
  }catch(err){
    res.status(400).json({
      'status': '0',
      'msg': 'Error al intentar realizar la operacion',
      'error': err
    });
  }
}


module.exports = alquilerCtrl;
