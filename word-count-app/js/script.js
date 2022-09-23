// Polyfills to count word and characters
String.prototype.countWords = function() {
    const words = this.split(" ").filter((word)=>word !== '');
    return words.length;
}

// for char count
String.prototype.countChars = function() {
    const chars = this.length;
    return chars;
}

const input = document.getElementById("input");
const wordsElement = document.getElementById("words");
const charsElement = document.getElementById("chars");

input.addEventListener('input', function(event) {
    const value = event.target.value;
    const totalWords = value.countWords();
    const totalChars = value.countChars();

    wordsElement.innerText = totalWords;
    charsElement.innerText = totalChars;
});