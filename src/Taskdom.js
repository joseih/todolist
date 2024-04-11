export default class TaskDomManipulator {
  constructor(task) {
    this.container = document.querySelector("#container");
    openTaskForm(this.container, task);
  }
}

function openTaskForm(container, task) {
  document.querySelector("#add").addEventListener("click", () => {
    container.innerHTML = `<div id="container-task-form">
    <form id="task-form" action="">
      <div>
      <input type="text" name="title" placeholder="Tittle" /></div>
      <div>
        <input type="date" name="duedate" id="duedate" />
        <select name="priority" id="priority">
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </div>
      <div>
        <textarea name="description" id="description" cols="30" rows="2"></textarea>
      </div>
      <div >
        <input type="submit" value="Add Task" />
      </div>
    </form>
  </div>
    `;

    processSubmit(document.querySelector("input[type=submit]"), task);
  });
}
function processSubmit(submit, task) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    processForm(document.querySelector("#task-form"), task);
    document.querySelector("#container-task-form").style.display = "none";
  });
}
function processForm(form, task) {
  let values = form.getElementsByTagName("input");
  let title = values[0].value;
  let dueDate = values[1].value;
  let description = form.getElementsByTagName("textarea")[0].value;
  let priority = form.getElementsByTagName("select")[0].value;
  task.addTask(title, description, dueDate, priority);
}
