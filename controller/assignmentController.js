import { error } from 'console';
import assignment from '../model/assignmentModel.js';

const getAssignmentAll = async(req,res) => {
    try {
        const assigns = await assignment.findAll();
        res.status(200).json(assigns);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAssignmentOne = async(req,res) => {
    const assignId = req.params.id;
    try {
        const assign = await assignment.findByPk(assignId);
        if(!assign) {
            return res.status(404).json({message: 'Assignment not found'});
        }
        res.status(200).json(assign);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createAssignment = async(req,res) => {
    const {title, description, lessonId} = req.body;
    try {
        const newAssignment = await assignment.create({title, description, lessonId});
        res.status(201).json(newAssignment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updatedAssignment = async(req,res) => {
    const assignId = req.params.id;
    const {title, description} = req.body;
    try {
        const assign = await assignment.findByPk(assignId);
        if(!assign){
            return res.status(404).json({message: 'Assegnment not found'});
        }
        await assignment.update({title,description}, {where: {id: assignId} });
        res.status(200).json({message: 'Assignment updated successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deletedAssignment = async(req,res) => {
    const assignId = req.params.id;
    try {
        const assign = await assignment.findByPk(assignId);
        if(!assign) {
            return res.status(404).json({message: 'Assignment not found'});
        }
        await assignment.destroy({where: {id: assignId} });
        res.status(201).json({message: 'Assignment deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
};

export default {
    getAssignmentAll,
    getAssignmentOne,
    createAssignment,
    updatedAssignment,
    deletedAssignment
};