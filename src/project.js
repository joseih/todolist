import { LogicDom } from "./dom";

export default class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  remove(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  alterTask(task) {
    this.tasks[this.tasks.indexOf(task)].alterStatus();
  }
  returnTasks() {
    return this.tasks;
  }
}
