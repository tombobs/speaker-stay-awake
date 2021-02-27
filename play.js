const audioEl = document.querySelector('audio');
const startBtn = document.querySelector('.play-btn-container');
const timeInput = document.querySelector('select');
let interval;

timeInput.value = localStorage.getItem('mins') || 20;

function start() {
    audioEl.classList.remove('hide');
    startBtn.classList.add('hide');
    document.body.classList.add('started');
    play();
    onTimeChange(timeInput.value);
}

function onTimeChange(mins) {
    localStorage.setItem('mins', mins);
    if (!document.body.classList.contains('started')) {
        // don't start playing until Play is clicked
        return;
    }
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(play, mins * 60 *  1000);
}

function play() {
    audioEl.play();
}