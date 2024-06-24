import express from 'express';
import userRoutes from './userRoutes.js';
import assignRoutes from './assignmentRoutes.js';
import coursesRoutes from './coursesRoutes.js';
import enrolmentRoutes from './enrollmentRoutes.js';
import lessonRoutes from './lessonRoutes.js';
import modulRoutes from './modulesRoutes.js';
import submissionRoutes from './submissionRoutes.js';


const app = express();

app.use('/user', userRoutes);
app.use('/assign', assignRoutes);
app.use('/cours', coursesRoutes);
app.use('/enrolment', enrolmentRoutes);
app.use('/lesson', lessonRoutes);
app.use('/modul', modulRoutes);
app.use('/submission', submissionRoutes);

export default app;