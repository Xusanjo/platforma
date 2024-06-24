import Submission from '../model/submission.model.js';

const getAllSubmession = async(req,res)=> {
    try {
        const submessions = Submission.findAll();
        res.status(200).json(submessions);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getOneSubmession = async(req,res) => {
    const submessionId = req.params.id;
    try {
        const submession = await Submission.findByPk(submessionId);
        if(!submession){
            return res.status(404).json({message: 'Submession not found'});
        }
        res.status(201).json(submession);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createdSubmession = async(req,res) => {
    const {asseginmentId, userId, content, grade} = req.body;
    try {
        const newSubmession = await Submission.create({asseginmentId,userId,content,grade});
        res.status(201).json(newSubmession);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updatedSubmession = async(req,res) => {
    const submessionId = req.params.id;
    const {asseginmentId, userId, content, grade} = req.body;
    try {
        const submession = await Submission.findByPk(submessionId);
        if(!submession) {
            return res.status(404).json({message: 'Submession not found'});
        }
        await Submission.update({asseginmentId, userId, content, grade}, {where: {id: submessionId} });
        res.status(200).json({message: 'Submession updated successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
};

const deletedSubmession = async(req,res) => {
    const submessionId = req.params.id;
    try {
        const submession = await Submission.findByPk(submessionId);
        if(!submession) {
            return res.status(404).json({message: 'Subbmession not found'});
        }
        await Submission.destroy({where: {id: submessionId} });
        res.status(200).json({message: 'Submession deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export default {
    getAllSubmession,
    getOneSubmession,
    createdSubmession,
    updatedSubmession,
    deletedSubmession
};