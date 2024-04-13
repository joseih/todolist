export default class TaskDomManipulator {
  constructor(taskList) {
    this.addTaskFormLogic(taskList);
  }
  addTaskFormLogic(taskList) {
    document.querySelector("#add").addEventListener("click", () => {
      document.querySelector("#container-task-form").style.display = "block";
    });
    document
      .querySelector("input[type=submit]")
      .addEventListener("click", (event) => {
        document.querySelector("#container-task-form").style.display = "none";
        this.processForm(taskList);
        event.preventDefault();
      });
  }
  processForm(taskList) {
    let form = document.querySelector("#task-form");
    let values = form.getElementsByTagName("input");
    let title = values[0].value;
    let dueDate = values[1].value;
    let description = form.getElementsByTagName("textarea")[0].value;
    let priority = form.getElementsByTagName("select")[0].value;
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<h1>${title}</h1>
    <p>${description}</p>
    <p>${dueDate}</p>
    <p>${priority}</p>`;
    document.querySelector("#container").appendChild(task);

    taskList.addTask(title, description, dueDate, priority);
  }
}
