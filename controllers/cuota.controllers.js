const Cuota = require('../models/cuota');
const CuotaCtrl = {};

CuotaCtrl.getCuotas = async (req, res) => {
    try {
        const cuotas = await Cuota.findAll(); // Obtiene todas las cuotas
        res.json(cuotas);
    } catch (err) {
        res.status(400).json({
            status: "0",
            msg: "Ocurrió un error al obtener las cuotas",
            error: err
        });
    }
};

CuotaCtrl.createCuota = async (req, res) => {
    try {
        const cuota = await Cuota.create(req.body); // Usamos create() para insertar una nueva cuota
        res.status(200).json({
            status: "1",
            msg: "Se creó la cuota correctamente",
            cuota: cuota // Puedes devolver la cuota creada
        });
    } catch (err) {
        res.status(400).json({
            status: "0",
            msg: "Ocurrió un error al intentar realizar la operación",
            error: err
        });
    }
};

CuotaCtrl.updateCuota = async (req, res) => {
    try {
        const cuota = await Cuota.update(req.body, {
            where: { id: req.params.id }  // Usamos la condición `where` para indicar qué cuota actualizar
        });
        
        if (cuota[0] === 0) {
            return res.status(400).json({
                status: "0",
                msg: "No se encontró la cuota para actualizar",
            });
        }

        res.status(200).json({
            status: "1",
            msg: "Cuota modificada correctamente"
        });
    } catch (err) {
        res.status(400).json({
            status: "0",
            msg: "Ocurrió un error al intentar realizar la operación",
            error: err
        });
    }
};

CuotaCtrl.deleteCuota = async (req, res) => {
    try {
        const cuota = await Cuota.destroy({
            where: { id: req.params.id } // Usamos destroy() para eliminar la cuota con el ID correspondiente
        });

        if (cuota === 0) {
            return res.status(400).json({
                status: "0",
                msg: "No se encontró la cuota para eliminar",
            });
        }

        res.status(200).json({
            status: "1",
            msg: "Cuota eliminada correctamente"
        });
    } catch (err) {
        res.status(400).json({
            status: "0",
            msg: "Ocurrió un error al intentar realizar la operación",
            error: err
        });
    }
};

module.exports = CuotaCtrl;