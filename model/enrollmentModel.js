import Sequelize from "sequelize";
import user from './userModel.js';
import course from './coursesModel.js';
import db from '../config/db.js';

const enrollment = db.define('enrollments', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: user,
            key: 'id'
        }
    },
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: course,
            key: 'id'
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
});

db.sync()
    .then(() => {
        console.log('Jadval yaratildi.')
    })
    .catch((error) => {
        console.error('Xatolik:', error)
    })

export default enrollment;