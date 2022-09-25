const input = document.getElementById("input");
const btnAddTodo = document.getElementById("btnAddTodo");

const todoListElement = document.getElementById("todoList");

btnAddTodo.addEventListener("click", addTodo);

// todos
let todos = [];

// add todo function
function addTodo() {
  let todoText = input.value;

  if (todoText === "") {
    alert("Please enter text to create todo");
    return;
  }

  const todo = {
    completed: false,
    text: todoText,
  };

  // append newly created todo
  todos = [todo, ...todos];

  // set todos in local storage
  localStorage.setItem("mytodos", JSON.stringify(todos));

  // clear input
  input.value = "";

  // get all todos
  getTodos();
}

// remove todo
function removeTodo(index) {
  todos = todos.filter((todo, i) => i !== index);
  localStorage.setItem("mytodos", JSON.stringify(todos));

  getTodos();
}

// mark todo
function markTodo(index, marked = true) {
  console.log(index, marked);

  todos[index].completed = marked;

  localStorage.setItem("mytodos", JSON.stringify(todos));

  getTodos();
}

function getTodos() {
  todoListElement.innerHTML = "";

  const mytodosStr = localStorage.getItem("mytodos");
  if (mytodosStr !== null) {
    const mytodos = JSON.parse(mytodosStr);
    todos = mytodos;

    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "todo-list-item";
      li.setAttribute("data-index", index);

      const chk = document.createElement("input");
      chk.setAttribute("type", "checkbox");
      chk.checked = todo.completed || false;
      chk.addEventListener("change", function (e) {
        markTodo(index, e.target.checked);
      });

      li.appendChild(chk);

      const span = document.createElement("span");
      span.innerText = todo.text;
      if (todo.completed) {
        span.style.textDecoration = "line-through";
      }
      span.addEventListener("click", function () {
        markTodo(index);
      });

      li.appendChild(span);

      const btnRemove = document.createElement("button");
      btnRemove.className = "btn-danger";
      btnRemove.innerText = "Remove";
      btnRemove.addEventListener("click", function () {
        removeTodo(index);
      });

      li.appendChild(btnRemove);

      // add li to todo list element
      todoListElement.appendChild(li);
    });
  }
}
getTodos();
