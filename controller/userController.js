import userModel from "../model/userModel.js";

const getUserAll = async(req,res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getUserOne = async(req,res) => {
    const userId = req.params.id;
    try {
        const user = await userModel.findByPk(userId);
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createUser = async(req,res) => {
    const {name, email, password, role} = req.body;
    try {
        const newUser = await userModel.create({name, email, password, role});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updateUser = async(req,res) => {
    const userId = req.params.id;
    const {name, email, password, role} = req.body;
    try {
        const user = await userModel.findByPk(userId);
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
        await userModel.update({name, email, password, role}, {where:{id:userId} });
        res.status(200).json({message: 'User updated successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deletedUser = async(req,res) => {
    const userId = req.params.id;
    try {
        const user = await userModel.findByPk(userId);
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
        await userModel.destroy({where: {id: userId} });
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export default {
    getUserAll,
    getUserOne,
    createUser,
    updateUser,
    deletedUser
};