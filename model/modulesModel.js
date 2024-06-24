import Sequelize from "sequelize";
import course from './coursesModel.js';
import db from '../config/db.js';

const modules =  db.define('Module', {
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
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: course,
            key: 'id'
        }
    },
    createAt: {
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

export default modules;