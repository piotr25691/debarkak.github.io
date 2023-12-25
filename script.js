const typedText = document.getElementById("typed-text");
const textArray = ["very simple website", "for now nothing here", "just a typing animation", "dm me on discord: debarkak", "i will add some things to this website later", "i will take suggestions from you guys", "request suggestions on discord", "or on Twiiter (X cuse  me)", "or on discord", "check my github profile (link in bottom)"];
let textIndex = 0;

function type() {
  if (textIndex < textArray.length) {
    const currentText = textArray[textIndex];
    const charIndex = typedText.textContent.length;

    if (charIndex < currentText.length) {
      typedText.textContent += currentText.charAt(charIndex);
      setTimeout(type, 100); 
    } else {
      setTimeout(erase, 1000); 
    }
  } else {
    textIndex = 0; 
    setTimeout(type, 500); 
  }
}

function erase() {
  if (typedText.textContent.length > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1); 
    setTimeout(erase, 50); 
  } else {
    textIndex++;
    type();
  }
}

type();
