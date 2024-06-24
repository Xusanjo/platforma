import express from 'express';
import dotenv from "dotenv"; 
import forum from './routes/forumRoutes.js';
dotenv.config();

const app = express();
app.use(express.json())

app.use('/platforma', forum);

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});