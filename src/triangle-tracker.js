export function Results() {

    var blanks = ["food"];
    var userInput = document.getElementById(blanks).value;
    var words = userInput.split(" ");

    const result = words.filter(word => word.length >= 3);

    return result;
}