const text = document.getElementById("text");

if (localStorage.count == "1") {
  text.innerHTML = "Just contact me.<br/>Seriously."
}
if (!!localStorage.count == false) {
  localStorage.count = "1"
}
