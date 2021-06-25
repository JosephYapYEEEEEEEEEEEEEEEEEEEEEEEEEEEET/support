const text = document.getElementById("text");
const emailtext = document.getElementById("emailtext");

if (localStorage.count == "1") {
  text.innerHTML = "Just contact me.<br/>Seriously."
}
if (!!localStorage.count == false) {
  localStorage.count = "1"
}
