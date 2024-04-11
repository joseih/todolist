import DomManipulator from "./domManipulator";
import todoItemFactory from "./todoInstance";

export default class Project {
  constructor(title, description, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.todoList = [];
    this.dom = new DomManipulator();
  }
  addTodoinProject() {
    
    this.todoList.push(todoItemFactory("A", "B", "C", "D", ""));
  }
}
