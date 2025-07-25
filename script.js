const addTodoButton = document.querySelector(".addTodoButton");
const addTodoInput = document.querySelector(".addTodoInput");
const todoList = document.querySelector(".todoList");

let todos = [];

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const newTodo = document.createElement("li");

    const todoContent = `
        <p>${todo.text}</p>
        <div class="buttonContainer">
          <button>
            Edit
            <img src="./public/edit.svg" />
          </button>
          <button>
            Remove
            <img src="./public/delete.svg" />
          </button>
        </div>`;

    newTodo.innerHTML = todoContent;
    todoList.appendChild(newTodo);
  });
};

const addTodo = () => {
  if (addTodoInput.value.trim() !== "") {
    const todoText = addTodoInput.value;
    addTodoInput.value = "";

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todoText,
      status: "active",
    };

    todos.push(newTodo);
    console.log({ todos });
  }

  const todoList = document.querySelector(".todoList");
  const newTodo = document.createElement("li");
  taskList.appendChild(newTask);

  renderTodos();
};

addTodoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && addTodoInput.value.trim() !== "") {
    addTodo();
  }
});

addTodoButton.onclick = addTodo;
