const Local = require ('../models/local');
const localCtrl = {};

localCtrl.getLocal = async (req, res) => {
    var locales = await Local.find();
    res.json(locales);
  };

localCtrl.createLocal = async (req, res) => {
    var local = new Local(req.body);
    try {
      await local.save();
      res.json({
        status: "1",
        msg: "Local guardado.",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando operacion.",
      });
    }
  };
  
localCtrl.getLocal = async (req, res) => {
    const local = await Local.findById(req.params.id);
    res.json(local);
  };

module.exports = localCtrl;