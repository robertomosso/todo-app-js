import "./style.css";

let spanSelected = null;
let editButton = null;

const input = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const addTodoButton = document.querySelector("#add-button");

addTodoButton.addEventListener("click", () => {
  if (addTodoButton.innerText === "Add") {
    const todoLi = document.createElement("li");
    const todoLiCheckbox = document.createElement("input");
    const todoLiSpan = document.createElement("span");
    const todoLiEditButton = document.createElement("button");
    const todoLiDeleteButton = document.createElement("button");

    todoLi.classList.add("todoLiDiv");

    todoLiCheckbox.type = "checkbox";
    todoLiCheckbox.addEventListener("change", () => {
      todoLiSpan.classList.toggle("toggle-item");
    });

    todoLiSpan.classList.add("todoLiDiv");
    todoLiSpan.innerText = input.value;
    input.value = "";

    todoLiEditButton.classList.add("edit-button");
    todoLiEditButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
    todoLiEditButton.addEventListener("click", () => {
      todoLiEditButton.disabled = true;
      editButton = todoLiEditButton;
      addTodoButton.innerText = "Edit";
      spanSelected = todoLiSpan;
      input.value = todoLiSpan.innerText;
      input.focus();
    });

    todoLiDeleteButton.classList.add("delete-button");
    todoLiDeleteButton.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
    todoLiDeleteButton.addEventListener("click", () => {
      input.value = "";
      todoList.removeChild(todoLi);
    });

    todoLi.appendChild(todoLiCheckbox);
    todoLi.appendChild(todoLiSpan);
    todoLi.appendChild(todoLiEditButton);
    todoLi.appendChild(todoLiDeleteButton);

    todoList.appendChild(todoLi);
  } else {
    editButton.disabled = false;
    addTodoButton.innerText = "Add";
    spanSelected.textContent = input.value;
    input.value = "";
  }
});
