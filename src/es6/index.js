function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
  };


newFunction();
newFunction('Ricardo', '23', 'CO');
//-------------------------------------------------------------------------------------------------------------------
let hello="Hello";
let world="World";
let epicPhrase=hello+" " +world;
console.log(epicPhrase);


let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase2)
//-------------------------------------------------------------------------------------------------------------------

let lorem="Qui,consequatur,commodi. Impsun vel duis yet minima \n" + "otra frase epica que necesitamos."

// es6

let lorem2=`otra frase
 epica que necesitmaos 
 ahora es otra 
 frase epica`

 console.log(lorem)
 console.log(lorem2)
//-------------------------------------------------------------------------------------------------------------------

let person={
     "name":"Oscar",
     "age":"35",
     "country": "MX"
 }

let{name,age,country}=person;

console.log(name,age,country)

//-------------------------------------------------------------------------------------------------------------------
let team1=["Oscar","Julian","Ricardo"]
let team2=["Valeria","Yesica","Camila"]

let educacion1=["David", ...team1,...team2]
let educacion2=["David", team1,team2]

console.log(educacion1);
console.log(educacion2);
//-------------------------------------------------------------------------------------------------------------------
{
    var globalVar="Global Var";
}

{
    let globalLet="Global Let";
    console.log(globalLet);
}


console.log(globalVar);
//-------------------------------------------------------------------------------------------------------------------
const a="b";
a="a";
console.log(a)


//-------------------------------------------------------------------------------------------------------------------
let name="oscar";
let age=32;

//es5
obj={name:name,age:age};
console.log(obj);
//es6
obj2={name,age};
console.log(obj2)

const names=[{name:"Oscar",age:32},{name:"Yesica",age:27}]

let listofnames=names.map(function(item){console.log(item.name)})

let listofnames2=names.map(item => console.log(item.name));

///const listofnames3=(name,age,country)=>{...}

///const listofnames4=name=>{...}

const square=num =>num*num;

const helloPromise=() =>{
    return new Promise((resolve,reject)=>  {
    if (true){
        resolve("Hey")
    }else{
        reject("ups!")
    }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hola"))
    .catch(error => console.log(error))

//-------------------------------------------------------------------------------------------------------------------

import {hello} from './module.js'

console.log(hello)

//-------------------------------------------------------------------------------------------------------------------

function* helloWorld (){
    if (true){
        yield "Hello, "
    }
    if (true){
        yield "World"
    }
}


const generatorHello=helloWorld();

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)