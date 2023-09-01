const taskInput = document.getElementById("task-input");
const submitBtn = document.querySelector(".btn-submit");
const infoText = document.querySelector(".info-text");
const todoList = document.querySelector(".todo-list");
const todoItems = document.querySelectorAll(".todo-list .todo-item");
const deleteBtn = document.querySelector(".btn-delete");

// Add task when submit button is clicked
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
});

// Delete task when delete button is clicked
// TODO: Add functionality to delete a task after creation
// deleteBtn.addEventListener("click", deleteTask());

function createTask() {
  // Stores the value of inputted text
  const taskText = taskInput.value;

  // Create the delete button
  const deleteBtn = document.createElement("button");

  // Creates the list item
  const li = document.createElement("li");

  // Adds a type attribute set to `button`.
  // Considered best practices
  deleteBtn.setAttribute("type", "button");

  // Adds DOM token classlist
  li.className = "todo-item";
  deleteBtn.className = "btn btn-delete";

  // Sets the text of list item to input value
  li.textContent = taskText;

  // Add delete button text
  deleteBtn.textContent = "Delete";

  // Checks if input contains text
  if (taskText) {
    // Create a task if it does
    todoList.appendChild(li);

    // Add delete button to each task
    li.appendChild(deleteBtn);

    // Display no error message
    infoText.textContent = "";
  } else {
    // Display an error message
    infoText.textContent = "Please input a task";
  }
}

function deleteTask() {
  console.log("deleted");
}
