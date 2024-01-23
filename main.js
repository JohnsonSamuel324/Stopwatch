let watchSecs = 0;
let watchMins = 0;
let timer = null;

function startWatch() {
    document.getElementById('btn-start').style.backgroundColor = '#007f00';
    timer = setInterval(function () {
        let strSecs = "";
        let strMins = "";
        
        watchSecs += 1;
        strSecs = watchSecs;
        
        if (watchSecs > 60) {
            watchSecs = 0;
            watchMins += 1;
        }
        if (watchSecs < 10) {
            strSecs = '0' + watchSecs;
        }
        if (watchMins < 10) {
            strMins = '0' + watchMins;
        }
        
        document.getElementById('watch-time').innerHTML = `${strMins}:${strSecs}`;
    }, 1000);
}

function stopWatch() {
    clearInterval(timer);
}

function resetWatch() {
    clearInterval(timer);
    watchSecs = 0;
    watchMins = 0;
    document.getElementById('watch-time').innerHTML = `0${watchMins}:0${watchSecs}`;
}