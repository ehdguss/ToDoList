const askForm = document.querySelector('.askName'),
    greeting = document.querySelector(".greeting"),
    input = document.querySelector('input');

const USER_LS = 'user';
const show = 'showing';

function paintName(text) {
    askForm.classList.remove(show);
    greeting.classList.add(show);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit() {
    event.preventDefault();
    const text = input.value;
    paintName(text);
    saveName(text);
}

function askName() {
    askForm.classList.add(show);
    addEventListener("submit", handleSubmit);
}

function loadName() {
    const name = localStorage.getItem(USER_LS);
    if(name === null) {
        askName();
    } else {
        paintName(name);
    }
}

function init() {
    loadName();
}
init();