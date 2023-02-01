function collect() {
var mycollection = document.getElementsByName("display");

document.getElementById("answer").innerHTML = "Hello " +
mycollection[0].value + " " + mycollection[1].value + "!";

}

