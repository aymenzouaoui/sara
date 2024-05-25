// jobController.js

import JobModel from '../models/jobModel.js';

class JobController {
    static async postJob(req, res) {
        const { name, email, service, date, time } = req.body;
        try {
            await JobModel.bookService(name, email, service, date, time);
            res.redirect('/jobs');
        } catch (error) {
            res.status(500).send(error.toString());
        }
    }

    static async getJobs(req, res) {
        try {
            const jobs = await JobModel.getBookings();
            res.render('jobs', { jobs });
        } catch (error) {
            res.status(500).send(error.toString());
        }
    }
}

export default JobController;
