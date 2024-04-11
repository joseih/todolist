import DomManipulator from "./Taskdom";

class TodoItem {
  constructor(tittle, description, dueDate, priority) {
    this.tittle = tittle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = false;
  }
}

export default function taskItemFactory(
  tittle,
  description,
  dueDate,
  priority
) {
  return new TodoItem(tittle, description, dueDate, priority);
}
