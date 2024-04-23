import Dom, { LogicDom } from "./dom";
export default class ProjectList {
  constructor() {
    this.projects = [];
    this.dom = new Dom(this);

  }
  addProject(project) {
    this.projects.push(project);
  }
  find(id) {
    return this.projects.find((project) => project.id == id);
  }
}
