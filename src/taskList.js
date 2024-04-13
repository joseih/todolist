import TaskDomManipulator from "./Taskdom";
import taskItemFactory from "./taskItem";

export default class TaskList {
  constructor() {
    this.tasks = [];
    this.dom = new TaskDomManipulator(this);
  }
  addTask(title, description, dueDate, priority) {
    this.tasks.push(taskItemFactory(title, description, dueDate, priority));
    console.log(this.tasks);
  }
}
