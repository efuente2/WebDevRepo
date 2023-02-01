"use strict";
function reverse(s) {
    var newString = s.split("").reverse().join("");
    var answer = document.getElementById("answer");
    if (answer) {
        answer.innerHTML = newString;
    }
}
