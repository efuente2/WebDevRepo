class student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    
    //this is constructor method
    document.getElementById("constructor").innerHTML = "method 4: constructor";
    
  }
}

function newStudent() {
var name = document.getElementById("name").value;
var grade = document.getElementById("grade").value;

  const newStudent = new student(name, grade);
  document.getElementById("answer").innerHTML = "The student's name is " +
  newStudent.name + " and they are in the " + newStudent.grade + "th grade.";

  //this is the inline  method
  var anonfunction = function() {
    document.getElementById("anon").innerHTML = "method 1: anonymous function";
  }

  //this is the named function method
  function namedfunction() {
    document.getElementById("named").innerHTML = "method 2: named function";
  }

  //this is a immediately invoked function expression
  (function() {
    document.getElementById("iife").innerHTML = "method 3: IIFE";
  })();
}

