//JavaScript Introduction


//JavaScript Can Change HTML Content

document.getElementById("demo").innerHTML = "Hello JavaScript";


//JavaScript Can Change HTML Attribute Values

//In this example JavaScript changes the value of the src (source) attribute of an <img> tag:


//JavaScript Can Change HTML Attribute Values


//JavaScript Can Change HTML Styles (CSS)
document.getElementById("demo").style.fontSize = "35px";

//JavaScript Can Hide HTML Elements

document.getElementById("demo").style.display = "none";

//JavaScript Can Show HTML Elements
document.getElementById("demo").style.display = "block";


//----------------------------------------------------------------------------------------------------------------

//JavaScript Where To

document.getElementById("demo").innerHTML = "My First JavaScript";

//JavaScript Functions and Events


//JavaScript Functions and Events

//JavaScript in <head>


//JavaScript in <body>


//External JavaScript

//External References
<script src="https://www.w3schools.com/js/myScript.js"></script>

//----------------------------------------------------------------------------------------------------------------

//JavaScript Output
//Using innerHTML
document.getElementById("demo").innerHTML = 5 + 6;

//Using document.write()
document.write(5 + 6)

//Using window.alert()
window.alert(5 + 6)
alert(5 + 6)


//Using console.log()
console.log(5 + 6);

//JavaScript Print
onclick="window.print()"

//----------------------------------------------------------------------------------------------------------------
//JavaScript Statements

document.getElementById("demo").innerHTML = "Hello Dolly.";

//JavaScript Code Blocks
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }

//----------------------------------------------------------------------------------------------------------------
//JavaScript Comments


/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/



//----------------------------------------------------------------------------------------------------------------
//JavaScript Variables
//One Statement, Many Variables

//----------------------------------------------------------------------------------------------------------------
//JavaScript Let

//----------------------------------------------------------------------------------------------------------------

//Constant Objects and Arrays

const lista=[1,2,3,4]
lista[4]=4

console.log(lista)

casa=lista.map(function(num){return num*2})
//----------------------------------------------------------------------------------------------------------------
//JavaScript Operators
//JavaScript String Operators


//----------------------------------------------------------------------------------------------------------------
//JavaScript Arithmetic


//----------------------------------------------------------------------------------------------------------------
//JavaScript Data Types

//----------------------------------------------------------------------------------------------------------------
//JavaScript Functions

//----------------------------------------------------------------------------------------------------------------

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 16);

console.log(part)

let text = "5";
console.log(text.padStart(50,1))

//----------------------------------------------------------------------------------------------------------------
//A String search

//JavaScript String indexOf()

let str = "Please locate where 'locate' occurs!";
a=str.indexOf("locate")
console.log(a)

//JavaScript String lastIndexOf()

let str = "Please locate where 'locate' occurs!";
a=str.lastIndexOf("locate")
console.log(a)

//JavaScript String search()
let str = "Please locate where 'locate' occurs!";
a=str.search("locate")
console.log(a)


//JavaScript String match()
let text = "The rain in SPAIN stays mainly in the plain";
a=text.match(/ain/g);
a=text.match(/ain/gi);
console.log(a)

//JavaScript String includes()
let text = "Hello world, welcome to the universe.";
a=text.includes("world");
console.log(a)


let text = "Hello world, welcome to the universe.";
a=text.includes("world", 8);
console.log(a)

//JavaScript String startsWith()
let text = "Hello world, welcome to the universe.";

a=text.startsWith("He");
console.log(a)


let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)    // Returns false

//JavaScript String endsWith()
var text = "John Doe";
a=text.endsWith("Doe");
console.log(a)

//----------------------------------------------------------------------------------------------------------------
//JavaScript Template Literals
//Back-Tics Syntax

let text = `Hello World!`;

//Multiline Strings

let text =
`The quick
brown fox
jumps over
the lazy dog`;

//Interpolation
a=`${ text}`


//Variable Substitutions
let firstName = "John";
let lastName = "Doe";

a = `Welcome ${firstName}, ${lastName}!`;

console.log(a)

//Expression Substitution
let price = 10;
let VAT = 0.25;
a = `Total: ${(price * (1 + VAT)).toFixed(3)}`;
console.log(a)


//HTML Templates

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;

//----------------------------------------------------------------------------------------------------------------
//JavaScript Numbers

a=123e-4
console.log(a)

//JavaScript Numbers are Always 64-bit Floating Point


//Value (aka Fraction/Mantissa)	    Exponent	        Sign
//52 bits (0 - 51) 	                11 bits (52 - 62)	1 bit (63)

//Integer Precision

let x = 999999999999999;   // x will be 999999999999999
let y = 556080580345702347676;  // y will be 10000000000000000

console.log(x)
console.log(y)

//Floating Precision
let x = 0.2 + 0.4;
console.log(x)

let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x)


//Numeric Strings
let x = 100;         // x is a number

let y = "100";       // y is a string



//NaN is a number: typeof NaN returns number:

x=typeof NaN
console.log(x)

//----------------------------------------------------------------------------------------------------------------
//JavaScript Number Methods
//Number Methods and Properties
//The toString() Method

let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();


//The toExponential() Method

let x = 2;
x.toExponential(10);
console.log(x)

x.toExponential(4);
x.toExponential(6);
console.log(x)

//The toPrecision() Method

let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);



Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");

x=Number(new Date("1970-01-01"))
console.log(x)



parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");


parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");



let x = Number.MAX_VALUE;

let x = Number.MIN_VALUE;
console.log(x)


let x = Number.POSITIVE_INFINITY;
console.log(x)



//----------------------------------------------------------------------------------------------------------------
//JavaScript Arrays


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length-1];
console.log(fruit)

//Looping Array Elements


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}


//Adding Array Elements
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person);  
const person = [];

console.log(typeof person);  
console.log(person.firstName);  

//----------------------------------------------------------------------------------------------------------------
//JavaScript Array Methods
//Converting Arrays to Strings

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join("*"));


//JavaScript Array pop()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
let fruit = fruits.pop();

console.log(fruit)

//JavaScript Array push()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)

//Shifting Elements
//JavaScript Array shift()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)


//JavaScript Array unshift()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits)



const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits)



//JavaScript Array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits)



//JavaScript Array delete()
//Warning !
//Array elements can be deleted using the JavaScript operator delete.
//Using delete leaves undefined holes in the array.
//Use pop() or shift() instead.

//Merging (Concatenating) Arrays

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

//Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
console.log(myChildren)

//Example (Merging an Array with Values)

//JavaScript Array splice()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)

//Using splice() to Remove Elements

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(fruits)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2);
console.log(fruits)


//JavaScript Array slice()

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus)


//JavaScript Array slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(citrus)

//Automatic toString()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

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
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
