const Task = require('../models/Task');

module.exports = {
  getIndex: function (req, res) {
    Task
      .find()
      .then((tasks) => {
        const openTasks = tasks.filter(t => t.status === 'Open')
        const inProgressTasks = tasks.filter(t => t.status === 'In Progress')
        const finishedTasks = tasks.filter(t => t.status === 'Finished')
        res.render('index', { openTasks, inProgressTasks, finishedTasks })
      })

    // TODO: get all open, inProgress and finished tasks, pass them to the index view and render it
  },
  getCreate: function (req, res) {
    res.render('create')

  },
  postCreate: function (req, res) {
    let task = req.body
    Task
      .create(task)
      .then(() => {
        res.redirect('/')
      })
      .catch((err) => console.warn(err));
    // TODO: create new task and redirect to the index view
  },
  getEdit: function (req, res) {
    const id = req.params.id;
    Task
      .findById(id)
      .then((task) => {
        task.open = task.status === 'Open'
        task.inProgress = task.status === 'In Progress'
        task.finished = task.status = 'Finished'
        res.render('edit', { task })
      })
    // TODO: get the task for editing, pass it to the edit view and render it
  },
  postEdit: function (req, res) {
    const id = req.params.id
    const updatedTasks = req.body

    Task
      .findByIdAndUpdate(id, updatedTasks)
      .then(() => {
        res.redirect('/')
      })
    // TODO: update the task and redirect to index view
  },
  getDelete: function (req, res) {
    const id = req.params.id;
    Task
      .findById(id)
      .then((task) => {
        task.open = task.status === 'Open'
        task.inProgress = task.status === 'In Progress'
        task.finished = task.status = 'Finished'
        res.render('delete', { task })
      })

    // TODO: get the task for deleting, pass it to the detele view and render it
  },
  postDelete: function (req, res) {
    const id = req.params.id;
    Task
      .findByIdAndRemove(id)
      .then(() => {
        res.redirect('/')
      })
    // TODO: delete the task and redirect to the index view
  }
};