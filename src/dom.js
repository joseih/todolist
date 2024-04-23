import Project from "./project";
import Task from "./task";

export default class Dom {
  constructor(projectList) {
    this.addsBtnLogic();
    this.addsSubmitLogic(projectList);
    this.addDefaultProject(projectList);
  }
  addsBtnLogic() {
    let projectAddBtn = document.getElementById("addProject");
    let containerProjectForm = document.getElementById(
      "container-project-form"
    );
    clickAddShowForm(projectAddBtn, containerProjectForm);
    let taskAddBtn = document.getElementById("addTask");
    let containerTaskForm = document.getElementById("container-task-form");
    clickAddShowForm(taskAddBtn, containerTaskForm);
  }
  addsSubmitLogic(projectList) {
    clickSubmit("add-task", projectList);
    clickSubmit("add-project", projectList);
  }
  addDefaultProject(projectList) {
    let project = new Project("Default", "0");
    projectList.addProject(project);
    addProjectInScreen(project);
  }
}

//Functions
function alterStatusObj(object, dom, objdom) {
  dom.addEventListener("click", () => {
    object.alterStatus();
    if (object.status) {
      objdom.querySelector(".incourse").className = "finished";
      objdom.style = "border:2px solid rgb(174, 238, 110);";
    } else {
      objdom.querySelector(".finished").className = "incourse";
    }
  });
}
function deleteObj(object, dom, objectList, objdom) {
  dom.addEventListener("click", () => {
    objectList.remove(object);
    objdom.remove();
  });
}
function editTaskInScreen(editbtn, taskObj) {
  editbtn.addEventListener("click", () => {
    
  });
}


function givePriorityColor(status, dom) {
  switch (status) {
    case "High":
      dom.style = "border:2px solid red";
      break;
    case "Medium":
      dom.style = "border:2px solid darkorange";
      break;
    case "Low":
      dom.style = "border:2px solid yellowgreen";
      break;
  }
}

function clickAddShowForm(addBtn, form) {
  addBtn.addEventListener("click", () => {
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  });
}

function addTaskInScreen(taskObj, projectObj) {
  let container = document.getElementById("container");
  let task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
  <div class="edit"><img src="../public/imgs/icons/magnify.svg"></img></div>
  <p class="priority">${taskObj.priority}</p>
  <h3>${taskObj.title}</h3>
  <p class="duedate">${taskObj.duedate}</p>
  <p class="description">${taskObj.description}</p>
  <input type="submit" value="Finish" name="finish-task" />
  <input type="button" value="Delete" name="delete-task" />
  <div class="incourse"></div>
  `;
  if (taskObj.status) {
    task.querySelector(".incourse").className = "finished";
    task.style = "border:2px solid rgb(174, 238, 110);";
  } else {
    givePriorityColor(taskObj.priority, task);
  }
  let finishTask = task.querySelector("input[type='submit']");
  let deleteTask = task.querySelector("input[type='button']");

  alterStatusObj(taskObj, finishTask, task);
  deleteObj(taskObj, deleteTask, projectObj, task);
  container.appendChild(task);
}
function addProjectInScreen(projectObj) {
  let projectList = document.getElementById("project-list");
  let projectLi = document.createElement("li");
  projectLi.id = projectObj.id;
  projectLi.classList.add("project");
  projectLi.innerHTML = `<span>${projectObj.name}</span>`;
  projectList.appendChild(projectLi);
  projectLi.onclick = () => {
    projectList.childNodes.forEach((x) => {
      if (x == projectLi) {
        x.className = "selected";
        wipeContainer();
        let tasks = projectObj.returnTasks();
        tasks.forEach((task) => {
          addTaskInScreen(task, projectObj);
        });
      } else {
        x.className = "project";
      }
    });
  };
}

function clickSubmit(submitDom, projectList) {
  let submit = document.getElementById(submitDom);
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    switch (submitDom) {
      case "add-task":
        let title = document.getElementsByName("title")[1].value;
        let duedate = document.getElementsByName("duedate")[0].value;
        let priority = document.getElementsByName("priority")[0].value;
        let description = document.getElementsByName("description")[0].value;
        let task = new Task(title, duedate, priority, description);
        let selectedProject = projectList.find(returnIdOfSelected());
        selectedProject.addTask(task);
        addTaskInScreen(task, selectedProject);
        break;
      case "add-project":
        let name = document.getElementsByName("title")[0].value;
        let id = Math.random().toString(36).substring(7);
        let project = new Project(name, id);
        projectList.addProject(project);
        addProjectInScreen(project);
        break;
    }
  });
}

function returnIdOfSelected() {
  let projectListDom = document.getElementById("project-list");
  let selectedProject = projectListDom.querySelector(".selected");
  if (selectedProject.id != null) {
    return selectedProject.id;
  }
}
function wipeContainer() {
  let container = document.querySelectorAll("#container .task");
  container.forEach((x) => {
    x.remove();
  });
}
