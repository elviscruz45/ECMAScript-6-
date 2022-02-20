//-------------------------------------------------------------------------------------------------

function Automobile(color) {
    this.color=color;
  }
  
  var vehicle1 = new Automobile ("red");


//-------------------------------------------------------------------------------------------------

function fruits() {    this.name = 'fruit 1';    }

    function apple() {    fruits.call(this);    }

    apple.prototype = Object.create(fruits.prototype);
    const app = new apple();
    console.log(app.name);
    
//-------------------------------------------------------------------------------------------------

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");


//-------------------------------------------------------------------------------------------------

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };


x=""

for(i in person){
    x+=person[i]+""
}

console.log(x)

//-------------------------------------------------------------------------------------------------
//Using Object.values()
