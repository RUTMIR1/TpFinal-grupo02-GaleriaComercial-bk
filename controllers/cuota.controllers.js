const Cuota = require('../models/cuota');
const CuotaCtrl = {};

CuotaCtrl.getCuotas = async (req, res) => {
    var cuotas = await Cuota.find().populate('pago');
    res.json(cuotas);
};

CuotaCtrl.createCuota = async (req, res) => {
    var cuota = new Cuota(req.body);
    try {
        await cuota.save();
        res.status(200).json({
            status: "1",
            msg: "Se creo la cuota correctamente",
        });
    } catch (err) {
        res.status(400).json({
            status: "0",
            msg: "ocurrio un error al intentar realizar la operacion",
            error: err
        });
    }
}

CuotaCtrl.updateCuota = async (req, res) => {
    var cuota = new Cuota(req.body);
    try{
        await Cuota.updateOne({_id:req.params.id}, cuota);
        res.status(200).json({
            'status': 1,
            'msg': 'cuota modificada correctamente'
        });
    }catch(err){
        res.status(400).json({
            'status': 0,
            'msg': 'ocurrio un error al intentar realizar la operacion',
            'error': err
        })
    }
}

CuotaCtrl.deleteCuota = async (req, res) => {
    try{
        await Cuota.deleteOne({_id:req.params.id});
        res.status(200).json({
            'status': 1,
            'msg': 'cuota eliminada correctamente'
        });
    }catch(err){
        res.status(400).json({
            'status':0,
            'msg': 'ocurrio un error al intentar realizar la operacion',
            'error': err
        });
    }
}

module.exports = CuotaCtrl;