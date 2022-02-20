//JavaScript Function Invocation

//The code inside a function is not executed when the function is defined.

//The code inside a function is executed when the function is invoked.

//It is common to use the term "call a function" instead of "invoke a function".

//It is also common to say "call upon a function", "start a function", or "execute a function".

//In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

//----------------------------------------------------------------------------------------------------------------
//Invoking a Function as a Function

function myFunction(a, b) {
    return a * b;
  }

console.log(myFunction(10, 2));           // Will return 20


//----------------------------------------------------------------------------------------------------------------


// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  // This creates a new object
  const myObj = new myFunction("John", "Doe");
  
  // This will return "John"
  myObj.firstName;
  
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
