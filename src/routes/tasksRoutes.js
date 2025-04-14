const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.showTasks)
router.get('/create', TaskController.getTaskForm)
router.post('/add', TaskController.saveTask)

module.exports = router