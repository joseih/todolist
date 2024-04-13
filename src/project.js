import ProjectDomManipulator from "./projectDom";
import TaskList from "./taskList";

export default class Project {
  constructor(tittle, description, dueDate, priority) {
    this.tittle = tittle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = false;
    this.taskList = new TaskList();
    this.dom = new ProjectDomManipulator(this);
  }
}
