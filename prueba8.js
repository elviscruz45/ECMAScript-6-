//----------------------------------------------------------------------------------------------------------------
//JavaScript Object Constructors

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");



//----------------------------------------------------------------------------------------------------------------
myFather.nationality = "English";

myFather.name = function () {
    return this.firstName + " " + this.lastName;
  };

console.log(myFather.name())

//----------------------------------------------------------------------------------------------------------------
//Adding a Method to a Constructor
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
      return this.firstName + " " + this.lastName;
    };}

function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {this.lastName = name;}}


//----------------------------------------------------------------------------------------------------------------
//Built-in JavaScript Constructors

//new String()    // A new String object
//new Number()    // A new Number object
//new Boolean()   // A new Boolean object
//new Object()    // A new Object object
//new Array()     // A new Array object
//new RegExp()    // A new RegExp object
//new Function()  // A new Function object
//new Date()      // A new Date object

//----------------------------------------------------------------------------------------------------------------

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function

console.log(x2)

//----------------------------------------------------------------------------------------------------------------