
var button = document.getElementById("test-button")!;
var dataDump = document.getElementById("data")!;

button.onclick = () => {
    dataDump.innerHTML += "Test!";
}
