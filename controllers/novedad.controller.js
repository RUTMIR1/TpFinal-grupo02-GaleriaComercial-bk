const Novedad = require('../models/novedad');
const NovedadCtrl = {};

NovedadCtrl.getNovedades = async (req, res) => {
    var novedades = await Novedad.find().populate('usuario');
    res.json(novedades);
};

NovedadCtrl.createNovedad = async (req, res) => {
    var novedad = new Novedad(req.body);
    try{
        await novedad.save();
        res.status(200).json({
            status: "1",
            msg: "Novedad creada correctamente",
        });
    }catch(err){
        res.status(400).json({
            status: "0",
            msg: "Error al intentar crear la novedad",
            error: err
        });
    }
}

NovedadCtrl.getNovedad = async (req, res) => { 
    const novedad = await Novedad.findById(req.params.id).populate("usuario"); 
    res.json(novedad); 
} 

NovedadCtrl.deleteNovedad = async (req, res) => {
    try{
        await Novedad.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: "1",
            msg: "Novedad eliminada correctamente",
        });
    }catch(err){
        res.status(400).json({
            status: "0",
            msg: "Error al intentar eliminar la novedad",
            error: err
        });
    }
}

NovedadCtrl.updateNovedad = async (req, res) => {
    var novedad = new Novedad(req.body);
    try{
        await Novedad.updateOne({_id:req.params.id}, novedad);
        res.status(200).json({
            status: "1",
            msg: "Novedad modificada correctamente",
        });
    }catch(err){
        res.status(400).json({
            status: "0",
            msg: "Error al intentar modificar la novedad",
            error: err
        });
    }
}

module.exports = NovedadCtrl;