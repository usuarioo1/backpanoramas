const Plan = require('../models/planSchema');

const getPlan = async (req, res) => {

    try {
        const panoramas = await Plan.find();
        res.json({
            success: true,
            message: 'lista de panoramas',
            info: panoramas
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'error en el servidor'
        })
    }
};

const getPlanById = async (req, res) => {
    try {
        const { id } = req.params;
        const panorama = await Plan.fundById(id);
        res.status(500).json({
            success: true,
            message: 'panorama solicitado',
            info: panorama
        })
    } catch (error) {
        res.status(500).json({ success: false, message: 'panorama' })
    }
};

const createPlan = async (req, res) => {
    try {
        const newPlan = new Plan(req.body);
        await newPlan.save();
        res.status(201).json({ success: true, message: 'nuevo panorama creado', info: newPlan })
    } catch (error) {
        console.error(error)
        res.status(500).json({ succees: false, message: error.message });
    }
};

const editPlan = async (req, res) => {
    const { titulo, descripcion, fecha, lugar, tipo } = req.body

    try {
        const { id } = req.params
        const planEdit = await Plan.findByIdAndUpdate(id, { titulo, descripcion, fecha, lugar, tipo });
        res.status(201).json({
            succees: true,
            message: 'panorama editado con éxito',
            info: planEdit
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false,
            message: error.message
        })
    }
};

const deletePlan = async (req, res) => {

    try {
        const { id } = req.params;
        const planDeleted = await Plan.findByIdAndDelete(id);
        res.status(204).json({
            succees: true,
            message: 'plan eliminado',
            info: planDeleted
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees:false,
            message: error.message
        })
    }

}

module.exports = {getPlan, getPlanById, createPlan, editPlan, deletePlan};