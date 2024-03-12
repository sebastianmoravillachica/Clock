function updateClock() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);

updateClock();


/*
This code is a functional clock,but it doesn't show the current time in the screen.
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock();
*/