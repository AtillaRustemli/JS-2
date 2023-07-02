let todoName = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName("input")[1];
let menu = document.getElementsByClassName("menu")[0];
let icon = document.getElementsByTagName("i");
let todos = [];
let todo;
let count = 0;

btn.addEventListener("click", create);
function create(s) {
  s.preventDefault();
  count++;
  let todo = `
  
  <input type="checkbox" name="${todoName.value}">
  <label name="${todoName.value}">${todoName.value}</label>
  <i class="fa-regular fa-pen-to-square edit" onclick="Upgrade(event)" style="color: #009e12;"></i>
  <i class="fa-regular fa-trash-can delete" onclick="Delete(event)"  style="color: #ff0000;"></i>
  `;
  if (count % 2 == 1) {
    todos.push(`
    <div class="todo">
    
    ${todo}
    </div>
    `);
  } else {
    todos.push(`
    <div class="todo1">
    
    ${todo}
    </div>
    
    `);
  }
  list();

  todoName.value = null;
}

let editIcon = document.querySelector(".edit");
let deleteIcon = document.querySelector(".delete");
function list() {
  menu.innerHTML = "";
  todos.forEach((todo) => (menu.innerHTML += `<form>${todo}</form>`));
}
document.addEventListener("DOMContentLoaded", function () {
  list();
});

function Delete(event) {
  event.target.parentElement.remove();
  todos.pop(event.target);
}
function Upgrade(event) {
  btn.value = "Upgrade";
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    event.target.parentElement.getElementsByTagName(
      "label"
    ).innerHTML = `${todoName.value}`;
    btn.value = "Add";
  });
}
