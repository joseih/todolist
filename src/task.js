export default class Task {
  constructor(title, duedate, priority, description, projectId) {
    this.title = title;
    this.duedate = duedate;
    this.priority = priority;
    this.description = description;
    if (projectId != undefined) {
      this.projectId = projectId;
    } else {
      this.projectId = "0";
    }
    this.status = false;
  }
  alterStatus() {
    this.status = !this.status;
    return this.status;
  }
}
