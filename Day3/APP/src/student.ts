class student {
  grade: string;
  name: string;
  constructor(name : string, grade : string) {
    this.name = name;
    this.grade = grade;
    
    //this is constructor method
    (<HTMLInputElement>document.getElementById('constructor')).innerHTML = "method 4: constructor";
    
  }
}

function newStudent() {
var name = (<HTMLInputElement>document.getElementById('name')).value;
var grade = (<HTMLInputElement>document.getElementById('grade')).value;

  const newStudent = new student(name, grade);
  (<HTMLInputElement>document.getElementById('answer')).innerHTML = "The student's name is " +
  newStudent.name + " and they are in the " + newStudent.grade + "th grade.";

  //this is the inline  method
  var anonfunction = function() {
    (<HTMLInputElement>document.getElementById('anon')).innerHTML = "method 1: anonymous function";
  }

  //this is the named function method
  function namedfunction() {
    (<HTMLInputElement>document.getElementById('named')).innerHTML = "method 2: named function";
  }

  //this is a immediately invoked function expression
  (function() {
    (<HTMLInputElement>document.getElementById('iife')).innerHTML = "method 3: IIFE";
  })();
}

