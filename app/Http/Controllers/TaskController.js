'use strict'

const Task = use("App/Model/Task")

class TaskController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const inputs = request.all()
    const task = new Task()
    task.task_string = inputs.newTask
    task.is_complete = false
    task.group = inputs.group
    yield task.save()
    response.redirect('back')
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = TaskController
