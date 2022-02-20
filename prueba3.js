// Libro JavaScript pagina 102 - METODOS

let conejo = {};
conejo.hablar = function(linea) {console.log(`El conejo dice '${linea}'`); };


//------------------------------------------------------------------------------------------------------------------

conejo.hablar("Estoy ahora.");
console.log(conejo.hablar)


//------------------------------------------------------------------------------------------------------------------
let culebra={}
culebra.nombre="spycy"
culebra.edad=20
culebra.color="verde"
console.log(culebra)

//------------------------------------------------------------------------------------------------------------------

function hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);}

let conejoBlanco = {tipo: "blanco", hablar};
let conejoHambriento = {tipo: "hambriento", hablar};


conejoBlanco.hablar("Oh mis orejas y bigotes, " + "que tarde se esta haciendo!");
// → El conejo blanco dice 'Oh mis orejas y bigotes, que tarde se esta haciendo!'

conejoHambriento.hablar("Podria comerme una zanahoria ahora mismo.");
// → El conejo hambriento dice 'Podria comerme una zanahoria ahora mismo.'


hablar.call(conejoHambriento, "Burp!"); // → El conejo hambriento dice 'Burp!'

//------------------------------------------------------------------------------------------------------------------

function normalizar() {
    console.log(this.coordinadas.map(n => n / this.length));
 }
 normalizar.call({coordinadas: [0, 2, 3], length: 5}); // → [0, 0.4, 0.6]



//------------------------------------------------------------------------------------------------------------------
//PROTOTIPO

let vacio = {};
console.log(vacio.toString); 

// → function toString()...{}

console.log(vacio.toString());
// → [object Object]

//------------------------------------------------------------------------------------------------------------------

console.log(Object.getPrototypeOf({}) ==Object.prototype);

console.log(Object.getPrototypeOf({}))

// → true

console.log(Object.getPrototypeOf(Object.prototype));
// → null

//------------------------------------------------------------------------------------------------------------------


console.log(Object.getPrototypeOf(Math.max) ==Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==Array.prototype);
// → true

//------------------------------------------------------------------------------------------------------------------


let conejoPrototipo = {hablar(linea) {console.log(`El conejo ${this.tipo} dice '${linea}'`);}};

let conejoAsesino = Object.create(conejoPrototipo);

conejoAsesino.tipo = "asesino";
conejoAsesino.hablar("SKREEEE!");

// → El conejo asesino dice 'SKREEEE!'


let vacio = {};
console.log(vacio.toString);