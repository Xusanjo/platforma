import Courses from "../model/coursesModel.js";

const getAllCourses = async(req,res) => {
    try {
        const courses = await Courses.findAll();
        res.status(201).json(courses);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getOneCourses = async(req,res) => {
    const courseId = req.params.id;
    try {
        const cours = await Courses.findByPk(courseId);
        if(!cours) {
            return res.status(404).json({message: 'Course not found'});
        }
        res.status(200).json(cours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createdCourses = async(req,res) => {
    const {title, description, price} = req.body;
    try {
        const newCours = await Courses.create({title, description, price});
        res.status(201).json(newCours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updatedCourses = async(req,res) => {
    const coursId = req.params.id;
    const {title, description, price} = req.body;
    try {
        const cours = await Courses.findByPk(coursId);
        if( !cours ){
            return res.status(404).json({message: 'Courses not found'});
        }
        await Courses.update({title, description, price}, {where: {id: coursId} });
        res.status(201).json({message: 'Cours updated successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deletedCourse = async(req,res) => {
    const coursId = req.params.id;
    try {
        const cours = await Courses.findByPk(coursId);
        if(!cours) {
            return res.status(404).json({message: 'Courses not found'});
        }
        await Courses.destroy({where: {id: coursId} });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export default {
    getAllCourses,
    getOneCourses,
    createdCourses,
    updatedCourses,
    deletedCourse,
};