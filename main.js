import "./style.css";

const input = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const addTodoButton = document.querySelector("#add-button");

addTodoButton.addEventListener("click", () => {

  const todoLi = document.createElement("li");
  todoLi.classList.add('todoLiDiv');

  const todoLiCheckbox = document.createElement("input");
  const todoLiSpan = document.createElement("span");
  const todoLiEditButton = document.createElement("button");
  const todoLiDeleteButton = document.createElement("button");

  todoLiCheckbox.type = 'checkbox';
  todoLiCheckbox.addEventListener('change', () => {
    console.log('ckeck', todoLiCheckbox.checked);
    todoLiSpan.classList.toggle('toggle-item');
  })

  todoLiSpan.classList.add('todoLiDiv');
  todoLiSpan.innerText = input.value;
  input.value = "";

  todoLiEditButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
  todoLiEditButton.addEventListener("click", (e) => {
    console.log(e, todoLiSpan);
    
    // input.value = e.target
  });

  todoLiDeleteButton.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
  todoLiDeleteButton.addEventListener("click", () => {
    todoList.removeChild(todoLi);
  });

  todoLi.appendChild(todoLiCheckbox);
  todoLi.appendChild(todoLiSpan);
  todoLi.appendChild(todoLiEditButton);
  todoLi.appendChild(todoLiDeleteButton);

  todoList.appendChild(todoLi);
});
