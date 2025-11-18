//* Delayed CallBack Function
function invokeAfterDelay(callback) {
    setTimeout(callback,2000)
}

function display_message() {
    console.log("Hello! Timmy");
}
invokeAfterDelay(display_message);