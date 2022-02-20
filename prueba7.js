//JavaScript Object Accessors

//-------------------------------------------------------------------------------------------------
//JavaScript Getter (The get Keyword)

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get  lang() {
      return this.language;
    }
  };

console.log(person.lang)

//-------------------------------------------------------------------------------------------------
//JavaScript Setter (The set Keyword)

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
// Set an object property using a setter:
  person.lang = "en";
  
// Display data from the object:
 console.log(person.language)

//-------------------------------------------------------------------------------------------------
//JavaScript Function or Getter?

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a method:
console.log(person.fullName())

// EXAMPLE 2 ---------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a getter:
console.log(person.fullName)
//----------------------------------------------------------------------------------------------------------------
//Data Quality
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;


//----------------------------------------------------------------------------------------------------------------

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  console.log(person.language)


//----------------------------------------------------------------------------------------------------------------

//Why Using Getters and Setters?

//It gives simpler syntax
//It allows equal syntax for properties and methods
//It can secure better data quality
//It is useful for doing things behind-the-scenes

//----------------------------------------------------------------------------------------------------------------
//Object.defineProperty()

// Define object
const obj = {counter : 0};
// Define setters
Object.defineProperty(obj, "reset", {get : function () {this.counter = 0;}});

Object.defineProperty(obj, "increment", {get : function () {this.counter++;}});

Object.defineProperty(obj, "decrement", {get : function () {this.counter--;}});

Object.defineProperty(obj, "add", {set : function (value) {this.counter += value;}});

Object.defineProperty(obj, "subtract", {set : function (value) {this.counter -= value;}});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.add = 5;

obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj)

//----------------------------------------------------------------------------------------------------------------