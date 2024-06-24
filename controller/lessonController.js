import Lesson from '../model/lessonModel.js';

const getAllLessons = async(req,res) => {
    try {
        const lessons = Lesson.findAll();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getOneLesson = async(req,res) => {
    const lessonId = req.params.id;
    try {
        const lesson = await Lesson.findByPk(lessonId);
        if(!lesson) {
            return res.status(404).json({message: 'Lesson not found'});
        }
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createdLesson = async(req,res) => {
    const {title, content, modulId} = req.body;
    try {
        const newLesson = await Lesson.create({title, content, modulId});
        res.status(201).json(newLesson);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updatedLesson = async(req,res) => {
    const lessonId = req.params.id;
    const {title, content, modulId} = req.body;
    try {
        const lesson = await Lesson.findByPk(lessonId);
        if(!lesson) {
            return res.status(404).json({message: 'Lesson not found'});
        }
        await Lesson.update({title, content, modulId}, {where: {id: lessonId} });
        res.status(201).json({message: 'Lessaon updated successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deletedLesson = async(req,res) => {
    const lessonId= req.params.id;
    try {
        const lesson = await Lesson.findByPk(lessonId);
        if(!lesson) {
            return res.status(404).json({message: 'Lesson not found'});
        }
        await Lesson.destroy({where: {id: lessonId} });
        res.status(200).json({message: 'Lesson deleted succesfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export default {
    getAllLessons,
    getOneLesson,
    createdLesson,
    updatedLesson,
    deletedLesson
};