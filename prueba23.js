//JavaScript Sorting Arrays

const fruits = ["aaaac", "aaaaa", "aaaab", "aaaad"];
fruits.sort();
console.log(fruits)



const fruits = ["aaaac", "aaaaa", "aaab", "aaad"];

fruits.reverse();

console.log(fruits)

//Numeric Sort

const points = [40, 100, 1, 5, 25, 10,2,134,12,54,667,45,22,77,90];
points.sort(function(a, b){return a - b});
console.log(points)

//Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return a-b})
console.log(points)


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
console.log(points)

//The Fisher Yates Method

const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
}
console.log(points)


//Find the Highest (or Lowest) Array Value
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value


//Using Math.max() on an Array

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

//Using Math.min() on an Array

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }

//My Min / Max JavaScript Methods

const points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

console.log(myArrayMax(points))

//My Min / Max JavaScript Methods

arr = [40, 100, 1, 5, 25, 10];
let len = arr.length;

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
}
console.log(len)

//Example (Find Min)

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }

//Sorting Object Arrays

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

cars.sort(function(a, b){return a.year - b.year});
console.log(cars)




//Sorting Object Arrays

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

//JavaScript Array Iteration
const numbers = [45, 4, 9, 16, 25];

let txt = 0;
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value) {
  txt += value; 
}

//JavaScript Array map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

//JavaScript Array filter()


const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(over18);


//JavaScript Array reduce()


const numbers = [19, 4, 9,4,5,6,7];
let sum = numbers.reduce(myFunction);

function myFunction(a,b) {
  return b;
}
console.log(sum);

//JavaScript Array reduceRight()
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(a, b, index, array) {
  return b;
}
console.log(sum);


//JavaScript Array every()

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//JavaScript Array some()
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


//JavaScript Array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);


//JavaScript Array lastIndexOf()


const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

//JavaScript Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


//JavaScript Array findIndex()

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


//JavaScript Array.from()

Array.from("ABCDEFG");
console.log(Array);



//const fruits = ["Banana", "Orange", "Apple", "Mango"];

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

console.log(text);


//Array entries()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f);


for (let x of f) {
    console.log(x +"\n");
}


//----------------------------------------------------------------------------------------------------------------
//JavaScript Array Const
//Const Block Scope
//Redeclaring Arrays

//----------------------------------------------------------------------------------------------------------------
//JavaScript Date Objects

const d = new Date("October 13, 2014 11:13:00");
console.log(d);

//JavaScript Date Output


const d = new Date();
console.log(d);



const d = new Date();
d.toString();
console.log(d);

//----------------------------------------------------------------------------------------------------------------


const d = new Date();
a=d.getFullYear();
console.log(a);

//----------------------------------------------------------------------------------------------------------------

a=Math.E        // returns Euler's number
Math.PI       // returns PI
b=Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

console.log(b);

//----------------------------------------------------------------------------------------------------------------
//JavaScript Random
//Math.random()
a=Math.random();
console.log(a);

//JavaScript Random Integers

a=Math.floor(Math.random() * 10);
console.log(a);

//A Proper Random Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//----------------------------------------------------------------------------------------------------------------
//JavaScript Booleans
//Comparing Different Types
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
//----------------------------------------------------------------------------------------------------------------
//JavaScript Comparison and Logical Operators


age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
//----------------------------------------------------------------------------------------------------------------
//JavaScript if else and else if

//The if Statement

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

//----------------------------------------------------------------------------------------------------------------
//JavaScript Switch Statement

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

//----------------------------------------------------------------------------------------------------------------
//JavaScript For Loop
//JavaScript Loops

const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  console.log(txt)
}

//----------------------------------------------------------------------------------------------------------------
//JavaScript Iterables
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}

//----------------------------------------------------------------------------------------------------------------
//JavaScript Iterables
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
    // code block to be executed
  }
//----------------------------------------------------------------------------------------------------------------
//JavaScript Sets

//Essential Set Methods

//      Method	                    Description
//      new Set()             Creates a new Set
//      add()                 Adds a new element to the Set
//      delete()	          Removes an element from a Set
//      has()	              Returns true if a value exists in the Set
//      forEach()	          Invokes a callback for each element in the Set
//      values()	          Returns an iterator with all the values in a Set
//      Property	          Description
//      size	              Returns the number of elements in a Set

const letters = new Set(["a","b","c"]);
console.log(letters)

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters)

//The forEach() Method
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text)

//The values() Method
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x + "<br>";
}
console.log(text);

//prueba

casa=[1,2,3,4,5,6]
masa=[]

casa.forEach(function(valor){ return masa.push(valor*2)})

console.log(masa)


casa="Increiblemente"
b=casa.toLowerCase()
a=new Set(b)
console.log(a)




//----------------------------------------------------------------------------------------------------------------
//JavaScript Maps
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits);




const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits.size);

//----------------------------------------------------------------------------------------------------------------
//JavaScript typeof




//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------