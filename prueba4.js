// Libro JavaScript pagina 105 - CLASES


let conejoPrototipo = {
    hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
    } };
let conejoAsesino = Object.create(conejoPrototipo);

conejoAsesino.tipo = "asesino";
conejoAsesino.hablar("SKREEEE!");
// → El conejo asesino dice 'SKREEEE!'
 

function crearConejo(tipo) {
    let conejo = Object.create(conejoPrototipo);
    conejo.tipo = tipo;
    return conejo;
 }

//-------------------------------------------------------------------------------------------------

function Conejo(tipo) {
    this.tipo = tipo;}

Conejo.prototype.hablar = function(linea) {console.log(`El conejo ${this.tipo} dice '${linea}'`); };

let conejoRaro = new Conejo("raro");

//-------------------------------------------------------------------------------------------------

function Punto2D(x, y) {
    this.x = x;
    this.y = y;}

// Punto2D.prototype.constructor = Punto2D

Punto2D.prototype.mover  = function(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

var p1 = new Point2D(1, 2);
p1.mover (3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6


//-------------------------------------------------------------------------------------------------


var obj1 = {
    a: 1,
    b: 2
  };
  
var obj2 = Object.create(obj1);
obj2.a = 2;

console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c); // undefined


//-------------------------------------------------------------------------------------------------
const person = {
    isHuman: false,
    printIntroduction: function(num) {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`+num);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction(15);
  // expected output: "My name is Matthew. Am I human? true"
  console.log(me.prototype.constructor==True)

//-------------------------------------------------------------------------------------------------

function shape(){
    this.x=0
    this.y=0
}

shape.prototype.move=function(x,y){
    this.x+=x;
    this.y+=y;
    console.info("Shape moved.")
}

function rectangle(){
    shape.call(this)
}

rectangle.prototype=Object.create(shape.prototype)
rectangle.prototype.constructor=rectangle

var rect=new rectangle()

console.log("es rect una instanacia de rectangle", rect instanceof rectangle )
 
rect.move(1,1);

//-------------------------------------------------------------------------------------------------

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar)

//-------------------------------------------------------------------------------------------------

// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
var myObj = new Object(),    str = 'myString',    rand = Math.random(),    obj = new Object();

myObj.type                 = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str]                 = 'Valor de cadena';
myObj[rand]                = 'Número aleatorio';
myObj[obj]                 = 'Object';
myObj['']                  = 'Incluso una cadena vacía';

console.log(myObj);

//-------------------------------------------------------------------------------------------------
var propertyName = 'make';
myCar[propertyName] = 'Ford';


propertyName = 'model';
myCar[propertyName] = 'Mustang';
//-------------------------------------------------------------------------------------------------
// objeto a sting


casa=obj.toString()

console.log(casa);


let text = new String("Hello World!");
console.log(text)

