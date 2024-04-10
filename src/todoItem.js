class TodoItem {
  constructor(tittle, description, dueDate, priority, status) {
    this.tittle = tittle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

export default function todoItemFactory(
  tittle,
  description,
  dueDate,
  priority,
  status
) {
  return new TodoItem(tittle, description, dueDate, priority, status);
}
