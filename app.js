//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector(".filter-todo");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filter.addEventListener("click", filterList);
//Functions

function addTodo(event) {

    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoListElement = document.createElement("li");
    var input = todoInput.value;
    var whiteSpaces = input.split(" ").length;

    if(whiteSpaces - 1 < todoInput.value.length) {

        todoListElement.innerText = todoInput.value;
        todoListElement.classList.add("todo-item");
        todoDiv.appendChild(todoListElement);

        const completeCheckButton = document.createElement("button");
        completeCheckButton.innerHTML = "<i class=\"fas fa-check\"></i>";
        completeCheckButton.classList.add("complete-btn");
        todoDiv.appendChild(completeCheckButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class=\"fas fa-trash\"></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        
    }
    todoInput.value = "";    
}

function deleteCheck(event) {
    console.log(event.target);
    const item = event.target;

    if(item.classList[0] === "trash-btn") {
        item.parentElement.classList.add("removed");
        item.parentElement.addEventListener("transitionend", () => {
            item.parentElement.remove();
        });
        //item.parentElement.remove();
    }

    if(item.classList[0] === "complete-btn") {
        item.parentElement.classList.toggle("completed");
    }
}

function filterList(event) {
    const todos = todoList.childNodes;
    console.log(typeof(todos));

    for(i = 1; i < todos.length; i++) {

        switch(event.target.value) {

            case "All": 
                todos[i].style.display = "flex";
                break;

            case "Completed":
                if(todos[i].classList.contains("completed")) {
                    todos[i].style.display = "flex";
                }
                else {
                    todos[i].style.display = "none";
                }
                break;

            case "Uncompleted":
                if(!todos[i].classList.contains("completed")) {
                    todos[i].style.display = "flex";
                }
                else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}