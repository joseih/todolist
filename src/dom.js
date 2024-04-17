import Project from "./project";
import Task from "./task";

export default class Dom {
  constructor(projectList) {
    this.logic = new LogicDom();
    this.process = new ProcessDom(projectList);
  }
}

export class LogicDom {
  constructor() {
    this.addTaskBtn();
    this.addProjectBtn();
  }
  addTaskBtn() {
    let addTaskBtn = document.getElementById("addTask");
    let containerTaskForm = document.getElementById("container-task-form");
    addTaskBtn.addEventListener("click", () => {
      if (containerTaskForm.style.display === "block") {
        containerTaskForm.style.display = "none";
      } else {
        containerTaskForm.style.display = "block";
      }
    });
  }
  addProjectBtn() {
    let addProjectBtn = document.getElementById("addProject");
    let containerProjectForm = document.getElementById(
      "container-project-form"
    );
    addProjectBtn.addEventListener("click", () => {
      if (containerProjectForm.style.display === "block") {
        containerProjectForm.style.display = "none";
      } else {
        containerProjectForm.style.display = "block";
      }
    });
  }
  static selectProject() {
    let projects = document.getElementById("project-list");
    for (const child of projects.children) {
      child.onclick = () => {
        child.className = "selected";
        projects.childNodes.forEach((x) => {
          if (x == child) {
            child.className = "selected";
          } else {
            child.className = "project";
          }
        });
      };
    }
  }
  static addTaskInScreen(title, duedate, priority, description) {
    let container = document.getElementById("container");
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
    <h3>${title}</h3>
    <p>${duedate}</p>
    <p>${priority}</p>
    <p>${description}</p>
    <input type="submit" value="Concluir" />
    `;
    container.appendChild(task);
  }
  static addProjectInScreen(projectObj) {
    let projectList = document.getElementById("project-list");
    let projectLi = document.createElement("li");
    projectLi.className = "project";
    projectLi.id = projectObj.id;
    projectLi.innerHTML = `<span>${projectObj.name}</span>`;
    projectList.appendChild(projectLi);
    projectLi.onclick = () => {
      projectList.childNodes.forEach((x) => {
        if (x == projectLi) {
          x.className = "selected";
          wipeContainer();
          let tasks = projectObj.returnTasks();
          tasks.forEach((task) => {
            LogicDom.addTaskInScreen(
              task.title,
              task.duedate,
              task.priority,
              task.description
            );
          });
        } else {
          x.className = "project";
        }
      });
    };
  }
}
class ProcessDom {
  constructor(projectList) {
    this.addTask(projectList);
    this.addProject(projectList);
  }
  addTask(projectList) {
    let submit = document.getElementById("add-task");
    submit.addEventListener("click", (event) => {
      event.preventDefault();
      let title = document.getElementsByName("title")[0].value;
      let duedate = document.getElementsByName("duedate")[0].value;
      let priority = document.getElementsByName("priority")[0].value;
      let description = document.getElementsByName("description")[0].value;

      try {
        let test = projectNotSelected(document.querySelector(".selected"));
        let id = test.id;
        let projectSelected = projectList.findProject(id);
        projectSelected.addTask(
          new Task(title, duedate, priority, description)
        );
      } catch (e) {
        console.error(e);
      }
    });
  }

  addProject(projectList) {
    let submit = document.getElementById("add-project");
    submit.addEventListener("click", (event) => {
      event.preventDefault();
      let title = document.getElementsByName("title")[1].value;
      let id = Date.now();
      let project = new Project(title, id);
      projectList.addProject(project);
    });
  }
}

function projectNotSelected(selectedProject) {
  if (selectedProject == undefined) {
    throw new Error("Projeto Não Selecionado");
  }
  return selectedProject;
}
function wipeContainer() {
  let container = document.querySelectorAll("#container .task");
  container.forEach((x) => {
    x.remove();
  });
}
