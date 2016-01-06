function digitalClock() {
    var hours = new Date().getHours();

    if (hours < 10) {
        hours = 0 + new Date().getHours();
    }

    var minutes = new Date().getMinutes();

    if (minutes < 10) {
        minutes = "0" + new Date().getMinutes();
    }

    var seconds = new Date().getSeconds();

    if (seconds < 10) {
        seconds = "0" + new Date().getSeconds();
    }

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

var timer = setInterval('digitalClock()', 1000);