let hours = 11;
let minutes = 58;
let seconds = 55;
document.getElementById("typography").innerHTML = "AM";

incrementTime();
setInterval(incrementTime, 1000);

function incrementTime() {
    // Incrementing seconds
    document.getElementById("seconds").innerHTML =
        seconds < 10 ? "0" + seconds : seconds;

    if (seconds == 0) {
        minutes++;
    }
    if (seconds > 58) {
        seconds = -1;
    }

    // Incrementing minutes
    document.getElementById("minutes").innerHTML =
        minutes < 10 ? "0" + minutes : minutes;
    if (minutes == 0) {
        hours++;
    }
    if (minutes > 59) {
        minutes = 0;
    }

    // Incrementing hours
    document.getElementById("hours").innerHTML =
        hours < 10 ? "0" + hours : hours;

    if (hours == 12) {
        if (document.getElementById("typography").innerHTML == "AM") {
            document.getElementById("typography").innerHTML = "PM";
        } else {
            document.getElementById("typography").innerHTML = "AM";
        }
    }

    if (hours >= 12) {
        hours = 0;
    }

    seconds++;
}
