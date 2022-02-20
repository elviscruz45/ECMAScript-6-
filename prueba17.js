//JavaScript Function Parameters
//Function Parameters and Arguments


function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(4, 5, 16))

//----------------------------------------------------------------------------------------------------------------

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAll(1, 123, 500, 115, 44, 88))
//----------------------------------------------------------------------------------------------------------------
//Arguments are Passed by Value

//The parameters, in a function call, are the function's arguments.

//JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

//If a function changes an argument's value, it does not change the parameter's original value.

//Changes to arguments are not visible (reflected) outside the function.

//----------------------------------------------------------------------------------------------------------------
//Objects are Passed by Reference
//In JavaScript, object references are values.

//Because of this, objects will behave like they are passed by reference:

//If a function changes an object property, it changes the original value.

//Changes to object properties are visible (reflected) outside the function.
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
