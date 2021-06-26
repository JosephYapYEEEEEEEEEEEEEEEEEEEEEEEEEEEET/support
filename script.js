const text = document.getElementById("text");
const emailtext = document.getElementById("emailtext");
const email = document.getElementById("email");

email.hidden = false;
if (localStorage.count == "1") {
  text.innerHTML = "Just contact me.<br/>Seriously.";
  emailtext.innerHTML = "CONTACT ME:";
} else if (localStorage.count == "2") {
  text.innerHTML = "I insist, contact me below.";
  emailtext.innerHTML = "LOOK, IT'S OVER HERE:";
} else if (localStorage.count == "3") {
  text.innerHTML = "Do you have anything better to do?";
  emailtext.innerHTML = "";
  email.hidden = true;
} else if (localStorage.count == "4") {
  text.innerHTML = "......";
  emailtext.innerHTML = `<span style="font-family: 'Source Code Pro', monospace;">--></span>`;
}
  else {
  text.innerHTML = "If you run into issues, turn the extension off and on in the Preferences Pane in the Safari App.";
  emailtext.innerHTML = "If that doesn't help email me at"
}
if (!!localStorage.count == false) {
  localStorage.count = "1";
} else if (localStorage.count == "1") {
  localStorage.count = "2";
} else if (localStorage.count == "2") {
  localStorage.count = "3";
} else if (localStorage.count == "3") {
  localStorage.count = "4";
}
