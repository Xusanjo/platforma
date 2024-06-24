import Enrollment from "../model/enrollmentModel.js";

const getAllEnrollmen = async(req,res) => {
    try {
        const enrollments = await Enrollment.findAll();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneEnrollmen = async(req,res) => {
    const enrollmentId = req.params.id;
    try {
        const enrollment = await Enrollment.findByPk(enrollmentId);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createdEnrollmen = async(req,res) => {
    const { userId, courseId } = req.body;
    try {
        const newEnrollment = await Enrollment.create({ userId, courseId });
        res.status(201).json(newEnrollment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatedEnrollmen = async(req,res) => {
    const enrollmentId = req.params.id;
    const { userId, courseId } = req.body;
    try {
        const enrollment = await Enrollment.findByPk(enrollmentId);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        await Enrollment.update({ userId, courseId }, { where: { id: enrollmentId } });
        res.status(200).json({ message: 'Enrollment updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletedEnrollmen = async(req,res) => {
    const enrollmentId = req.params.id;
    try {
        const enrollment = await Enrollment.findByPk(enrollmentId);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        await Enrollment.destroy({ where: { id: enrollmentId } });
        res.status(200).json({ message: 'Enrollment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getAllEnrollmen,
    getOneEnrollmen,
    createdEnrollmen,
    updatedEnrollmen,
    deletedEnrollmen
};