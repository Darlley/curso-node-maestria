const taskModel = require('../models/Task')

class TaskController {
  static showTasks(req, res) {
    res.render('tasks/all')
  }

  static getTaskForm(req, res) {
    res.render('tasks/create')
  }

  static async saveTask(req, res) {
    const { title, description } = req.body

    const task = {
      title,
      description,
      done: false
    }

    await taskModel.create(task)

    res.redirect('/tasks')
  }
}

module.exports = TaskController