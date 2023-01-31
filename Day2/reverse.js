function reverse(s){
    var newString = s.split("").reverse().join("");
    document.getElementById("answer").innerHTML = newString;
}