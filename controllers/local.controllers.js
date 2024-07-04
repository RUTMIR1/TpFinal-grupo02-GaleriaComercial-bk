const Local = require ('../models/local');
const localCtrl = {};

localCtrl.getLocales = async (req, res) => {
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
    } catch (err) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando operacion.",
        error: err
      });
    }
  };
  
localCtrl.getLocal = async (req, res) => {
    const local = await Local.findById(req.params.id);
    res.json(local);
  };

localCtrl.updateLocal = async (req, res)=>{
  var local = new Local(req.body);
  try{
    await Local.updateOne({_id: req.params.id}, local);
    res.status(200).json({
      status: "1",
      msg: "Local actualizado."
    });
  }catch(err){
    res.status(400).json({
      status: "0",
      msg: "Error al intentar realizar la operación.",
      error: err
    })
  }
}

localCtrl.deleteLocal = async (req, res) => {
  try{
    await Local.deleteOne({_id: req.params.id});
    res.status(200).json({
      status: "1",
      msg: "Local eliminado correctamente."
    });
  }catch(err){
    res.status(400).json({
      status: "0",
      msg: "Error al intentar realizar la operación.",
      error: err
    });
  }
}
module.exports = localCtrl;