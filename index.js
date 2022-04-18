
function increaseCounter() {
    document.getElementById("View").innerHTML = ++counter
    
}
function decrementCounter() {
    document.getElementById("View").innerHTML = --counter
}
function resetCounter() {
    counter = 0
    document.getElementById("View").innerHTML = counter
}