// @ts-check
const addTodoInput = document.querySelector(".addTodoInput");
const todoList = document.querySelector(".todoList");
const templateTodo = document.querySelector("template");
const addTodoForm = document.querySelector(".addTodoForm");

if (!todoList || !templateTodo || !addTodoForm) throw new Error();

if (!(addTodoInput instanceof HTMLInputElement)) throw new Error();

let todos = [];

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const fragmentTodo = templateTodo.content.cloneNode(true);
    if (!(fragmentTodo instanceof DocumentFragment)) throw new Error();

    const fragmentP = fragmentTodo.querySelector("p");
    if (fragmentP) {
      fragmentP.textContent = todo.text;
    }
    const fragmentRemoveTodoButton =
      fragmentTodo.querySelector(".removeTodoButton");
    if (fragmentRemoveTodoButton) {
      fragmentRemoveTodoButton.addEventListener("click", () => {
        todos = todos.filter((fragmentTodo) => todo.id !== fragmentTodo.id);
        renderTodos();
      });
    }
    todoList.appendChild(fragmentTodo);
  });
};

renderTodos();

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
  }

  renderTodos();
};

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});
