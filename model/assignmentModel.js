import Sequelize from "sequelize";
import lesson from "./lessonModel.js";
import db from '../config/db.js';

const assignment = db.define('assign', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: lesson,
            key: 'id'
        }
    }
});

db.sync()
    .then(() => {
        console.log('Jadval yaratildi.')
    })
    .catch((error) => {
        console.error('Xatolik:', error)
    })

export default assignment;