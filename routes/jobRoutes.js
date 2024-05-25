// jobRoutes.js

import express from 'express';
import JobController from '../controllers/jobController.js';

const router = express.Router();

// Route for posting a job
router.post('/postJob', JobController.postJob);

// Route for retrieving job listings
router.get('/jobs', JobController.getJobs);

export default router;
