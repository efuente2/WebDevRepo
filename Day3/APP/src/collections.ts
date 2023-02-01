function collect() {
let mycollection : NodeListOf<HTMLInputElement> = document.getElementsByName("display") as unknown as NodeListOf<HTMLInputElement>;

(<HTMLInputElement>document.getElementById('answer')).innerHTML = "Hello " +
mycollection[0].value + " " + mycollection[1].value + "!";

}
