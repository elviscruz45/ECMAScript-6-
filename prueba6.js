const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };


  person.name=function (){return (this.firstName+" "+ this.lastName).toUpperCase()}

  console.log(person.name())



  console.log(person)


//-------------------------------------------------------------------------------------------------

//Using Object.values()

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
const myArray = Object.values(person);

console.log(myArray)

//-------------------------------------------------------------------------------------------------
//Using JSON.stringify()

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
let myString = JSON.stringify(person);

console.log(myString)




//-------------------------------------------------------------------------------------------------
//se ha stringifycado

const person = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };

console.log(person["age"])

//-------------------------------------------------------------------------------------------------
// Stringify Dates

const person = {
    name: "John",
    today: new Date()
  };

let myString = JSON.stringify(person);

console.log(myString)


//-------------------------------------------------------------------------------------------------

//Stringify Functions

const person = {
    name: "John",
    age: function () {return 30;}
  };
  
let myString = JSON.stringify(person);
console.log(myString)



//-------------------------------------------------------------------------------------------------

const person = {
    name: "John",
    age: function () {return 30;}
  };

person.age = person.age.toString();

let myString = JSON.stringify(person);

console.log(myString)


//-------------------------------------------------------------------------------------------------
//Stringify Arrays


const arr = ["John", "Peter", "Sally", 50];

let myString = JSON.stringify(arr);

console.log(myString)

//-------------------------------------------------------------------------------------------------

