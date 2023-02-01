function reverse(s: string){
    var newString = s.split("").reverse().join("");
    var answer = document.getElementById("answer");

    if(answer){
            answer.innerHTML = newString;
    }
}