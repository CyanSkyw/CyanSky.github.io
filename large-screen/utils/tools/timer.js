function timer() {
    let date;
    let element = document.getElementById('timer');
    setInterval(() => {
        date = new Date();
        element.innerText = formatDate(date, fmt = 'YYYY/mm/dd HH:MM:SS 星期D');
    }, 1000)
}
timer();