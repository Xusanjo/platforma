import Modul from '../model/modulesModel.js';

const getAllModul = async(req,res) => {
    try {
        const moduls = Modul.findAll();
        res.status(201).json(moduls);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getOneModul = async(req,res) => {
    const modulId = req.params.id;
    try {
        const modul = Modul.findByPk(modulId);
        if(!modul){ 
            return res.status(404).json({message: 'Modul not found'});
        }
        res.status(200).json(modul);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createdModul = async(req,res) => {
    const {title, description, courseId} = req.body;
    try {
        const newModul = await Modul.create({title, description, courseId});
        res.status(201).json(newModul);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updatedModul = async(req,res) => {
    const modulId = req.params.id;
    const {title, description, courseId} = req.body;
    try {
        const modul = await Modul.findByPk(modulId);
        if(!modul) {
            return res.status(404).json({message: 'Modul not found'});
        }
        await Modul.update({title, description, courseId}, {where: {id: modulId} });
        res.status(201).json({message: 'Modul updated successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deletedModul = async(req,res) => {
    const modulId = req.params.id;
    try {
        const modul = await Modul.findByPk(modulId);
        if(!modul) {
            return res.status(404).json({message: 'Modul not found'});
        }
        await Modul.destroy({where: {id: modulId} });
        res.status(201).json({message: 'Modul deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export default {
    getAllModul,
    getOneModul,
    createdModul,
    updatedModul,
    deletedModul
};