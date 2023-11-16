function log(msg) {
    const debug = document.getElementById("debugConsole")

    if(debug !== null){
        debug.innerHTML += msg + "<br>"
    }
}