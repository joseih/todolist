import { LogicDom } from "./dom";

export default class Task {
  constructor(title, duedate, priority, description) {
    this.title = title;
    this.duedate = duedate;
    this.priority = priority;
    this.description = description;
    this.status = false;
    LogicDom.addTaskInScreen(title, duedate, priority, description);
  }
  alterStatus() {
    this.status = !this.status;
  }
  
}
