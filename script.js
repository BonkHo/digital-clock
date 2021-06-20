let hours = 1;
let minutes = 00;
let seconds = 00;
document.getElementById("seconds").innerHTML = "AM";
incrementMinutes();
incrementHours();
setInterval(incrementSeconds, 1000);
setInterval(incrementMinutes, 1000 * 60);
setInterval(incrementHours, 1000 * 3600);

function incrementSeconds() {
    document.getElementById("seconds").innerHTML =
        seconds < 10 ? "0" + seconds : seconds;
    if (seconds > 58) {
        seconds = -1;
    }
    seconds++;
}

function incrementMinutes() {
    document.getElementById("minutes").innerHTML =
        minutes < 10 ? "0" + minutes : minutes;
    if (minutes > 58) {
        minutes = -1;
    }
    minutes++;
}

function incrementHours() {
    document.getElementById("hours").innerHTML =
        hours < 10 ? "0" + hours : hours;
    if (hours >= 12) {
        hours = 0;
    }
    hours++;
}
