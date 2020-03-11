const clock = document.querySelector('.clock');
const calendar = document.querySelector('.calendar');

function getTimes() {
    const time = new Date();

    const hours = time.getHours(),
        minutes = time.getMinutes();
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    const month = time.getMonth(),
        date = time.getDate();
    calendar.innerText = `${month < 10 ? `0${month}` : month} / ${date < 10 ? `0${date}` : date}`; 
}

function init() {
    getTimes();
    setInterval(getTimes, 1000);
}
init();