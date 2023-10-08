const taskInput = document.querySelector(".task-input input");
const taskBox = document.querySelector(".task-box");
let todos = JSON.parse(localStorage.getItem("todo-list")) || [];

function showTodo() {
  taskBox.innerHTML = ""; // Clear the previous todo items

  todos.forEach((todo, id) => {
    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
      <label for="${id}">
        <input onclick="updateStatus(this)" type="checkbox" id="${id}" />
        <p>${todo.name}</p>
      </label>
      <div class="settings">
        <i class="uil uil-ellipsis-h"></i>
        <ul class="task-menu">
          <li><i class="uil uil-pen"></i>Edit</li>
          <li><i class="uil uil-trash"></i>Delete</li>
        </ul>
      </div>`;
    taskBox.appendChild(li); // Append the new todo item
  });
}

showTodo();

function updateStatus(selectedTask) {
  //getting paragraf that contains task name
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add("checked");
    todos[selectedTask.id].status = "completed";
  } else {
    taskName.classList.remove("checked");
    todos[selectedTask.id].status = "pending";
  }
}

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key === "Enter" && userTask) {
    taskInput.value = "";

    if (!todos) {
      todos = [];
    }

    let taskInfo = { name: userTask, status: "pending" };
    todos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
  }
});
