//JavaScript Iterables
casa=[45, 4, 9, 16, 25]

for(let x in casa){
    console.log(casa[x])
}


//----------------------------------------------------------------------------------------------------------------
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}

console.log(txt)

//----------------------------------------------------------------------------------------------------------------
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
