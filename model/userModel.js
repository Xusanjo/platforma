import DataTypes from "sequelize";
import db from '../config/db.js';

const User = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('student', 'instructor', 'admin'),
        allowNull: false
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    }
});

db.sync()
    .then(() => {
        console.log('Jadval yaratildi.')
    })
    .catch((error) => {
        console.error('Xatolik:', error)
    })

export default User;