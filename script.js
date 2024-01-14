const terminal = document.getElementById("terminal");
const text = "welcome to my website \nthis is just a simple typing animation website";
let index = 0;

function type() {
  if (index < text.length) {
    terminal.innerHTML += text[index];
    index++;
    setTimeout(type, 100);
  } else {
    terminal.innerHTML += "<span class='cursor'>_</span>";
  }
}

type();
