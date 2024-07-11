const Pago = require ('../models/pago');
const pagoCtrl = {};

pagoCtrl.getPagos = async (req, res) => {
    var pagos = await Pago.find().populate('usuario');
    res.json(pagos);
  };

pagoCtrl.createPago = async (req, res) => {
    var pago = new Pago(req.body);
    try {
      await pago.save();
      res.json({
        status: "1",
        msg: "pago guardado",
        pagoGuardado: pago
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando operacion.",
      });
    }
  };
  
pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findOne({_id:req.params.id}).populate('usuario');
    res.status(200).json(pago);
  };

module.exports = pagoCtrl;