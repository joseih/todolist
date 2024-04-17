import Dom, { LogicDom } from "./dom";
import Project from "./project";
import Task from "./task";
let cont = 0;
export default class ProjectList {
  constructor() {
    this.projects = [];
    this.addProject(new Project("Projeto 1", "default"));
    this.addProject(new Project("Projeto 2", "default"));
    this.projects.forEach((x) => {
      x.addTask(new Task("Task " + cont, "01/01/2021", "default", "Descrição"));
      cont += 1;
    });
    this.dom = new Dom(this);
  }
  addProject(project) {
    LogicDom.addProjectInScreen(project);
    this.projects.push(project);
  }
  removeProject(project) {
    this.projects.splice(this.projects.indexOf(project), 1);
  }
  findProject(id) {
    return this.projects.find((project) => project.id == id);
  }
}
