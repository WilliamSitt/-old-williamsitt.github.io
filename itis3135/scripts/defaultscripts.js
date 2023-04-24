function scriptTest() {
    alert("Hey my script is running");
}
function displayDate() {
    var today = new Date();
    document.write("Today is " + today.toLocaleTimeString() + " on " + today.toDateString());
}
