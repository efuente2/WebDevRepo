"use strict";
function Arrow(s) {
    let hello = (s) => "Hello " + s;
    document.getElementById('answer').innerHTML = hello(s);
}
