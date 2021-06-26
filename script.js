const text = document.getElementById("text");
const emailtext = document.getElementById("emailtext");

if (localStorage.count == "1") {
  text.innerHTML = "Just contact me.<br/>Seriously.";
  emailtext.innerHTML = "CONTACT ME:";
} else {
  text.innerHTML = "If you run into issues, turn the extension off and on in the Preferences Pane in the Safari App.";
  emailtext.innerHTML = "If that doesn't help email me at"
}
if (!!localStorage.count == false) {
  localStorage.count = "1"
}
