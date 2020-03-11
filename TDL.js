const toDoForm = document.querySelector('.toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.toDoList');

const TODO_LS = "toDo";
const SHOW = "showing"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function delToDo() {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    toDoForm.classList.add(SHOW);
}   

function paintToDo(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        toDo = document.createElement("span");
    const ID = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.classList.add("delBtn");
    toDo.innerText = text;
    addEventListener("click", delToDo);

    li.appendChild(toDo);
    li.appendChild(delBtn);
    li.id = ID;
    toDoList.appendChild(li);

    toDoObj = {
        text: text,
        id: ID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit() {
    event.preventDefault();
    const text = toDoInput.value;
    paintToDo(text);
    toDoInput.value="";
    toDoForm.classList.remove(SHOW);
}

function askToDo() {
    toDoForm.classList.add(SHOW);
    addEventListener("submit", handleSubmit);
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODO_LS);
    if(loadToDos === null) {
        askToDo();
    } else {
        const parsedToDo = JSON.parse(loadToDos);
        parsedToDo.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
}
init();