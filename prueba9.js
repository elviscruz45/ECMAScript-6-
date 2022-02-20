//----------------------------------------------------------------------------------------------------------------

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");


//----------------------------------------------------------------------------------------------------------------
//Prototype Inheritance
//All JavaScript objects inherit properties and methods from a prototype:

//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype
//The Object.prototype is on the top of the prototype inheritance chain:

//Date objects, Array objects, and Person objects inherit from Object.prototype.

//----------------------------------------------------------------------------------------------------------------
// Prototype Inheritance
//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype

//Adding Properties and Methods to Objects


//----------------------------------------------------------------------------------------------------------------
//Using the prototype Property
//The JavaScript prototype property also allows you to add new methods to objects constructors:



function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };


  //----------------------------------------------------------------------------------------------------------------