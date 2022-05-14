// the main array

const texts = ["Web Design", "Graphic Design", "Movies", "Singing"];

// the selectors

let count = 0;
let index = 0;
let letter = "";
let currentText = "";
const output = document.getElementById("typing");

// the function 

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    output.textContent = letter;
    if (letter.length === currentText.length) {
        index = 0;
        count++;
    }
    setTimeout(type, 400);
}());