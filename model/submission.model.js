import Sequelize from "sequelize";
import assignment from './assignmentModel.js';
import user from './userModel.js';
import db from '../config/db.js';

const submission = db.define('submission', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    assignmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: assignment,
            key: 'id'
        }
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: user,
            key: 'id'
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    grade: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false
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

export default submission;