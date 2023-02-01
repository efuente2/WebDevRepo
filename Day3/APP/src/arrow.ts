function Arrow(s: string) {
   let hello = (s: string) => "Hello " + s;

   (<HTMLInputElement>document.getElementById('answer')).innerHTML = hello(s);
}
