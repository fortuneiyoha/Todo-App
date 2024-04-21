const taskInput = document.getElementById("task-input");
const submitBtn = document.getElementById("btn-submit");
const infoText = document.querySelector(".info-text");
const todoList = document.querySelector(".todo-list");

submitBtn.addEventListener("click", createTask);
todoList.addEventListener("click", deleteTask);

function createTask(e) {
  e.preventDefault();

  const deleteBtn = document.createElement("button");
  const todoItem = document.createElement("li");

  todoItem.className = "todo-item";
  todoItem.textContent = taskInput.value;

  deleteBtn.setAttribute("type", "button");
  deleteBtn.className = "btn btn-delete";
  deleteBtn.textContent = "Delete";

  if (taskInput.value) {
    todoList.appendChild(todoItem);
    todoItem.appendChild(deleteBtn);
    infoText.textContent = "";
    // FIXME:
    // localStorage.setItem(null, taskInput.value);
  } else {
    infoText.textContent = "Please add input for a task";
  }
}

function deleteTask(e) {
  if (e.target.classList.contains("btn-delete") && confirm("Are you sure?")) {
    e.target.parentElement.remove();
  }
}
