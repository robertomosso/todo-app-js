import "./style.css";

const input = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const addTodoButton = document.querySelector("#add-button");

addTodoButton.addEventListener("click", () => {
  const todoLi = document.createElement("li");
  const todoLiDiv = document.createElement("div");
  const todoLiSpan = document.createElement("span");
  const todoLiButton = document.createElement("button");

  todoLiSpan.innerText = input.value;
  input.value = "";
  todoLiButton.innerText = "Remove";

  todoLiButton.addEventListener("click", () => {
    console.log("remove");
    todoList.removeChild(todoLi);
  });

  todoLiDiv.appendChild(todoLiSpan);
  todoLiDiv.appendChild(todoLiButton);

  todoLi.appendChild(todoLiDiv);
  todoList.appendChild(todoLi);
});
