const express = require('express')
const router = express.Router();

const {
    getTask,
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTask).post(createTask)
router.route('/:_id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router