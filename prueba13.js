//----------------------------------------------------------------------------------------------------------------
//JavaScript Callbacks

function myDisplayer(some) {
    console.log(some);
  }

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();


//----------------------------------------------------------------------------------------------------------------

function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);

//----------------------------------------------------------------------------------------------------------------
//JavaScript Callbacks


function myDisplayer(some) {
    console.log(some);
  }
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
myCalculator(5, 5, myDisplayer);


//----------------------------------------------------------------------------------------------------------------
//Asynchronous JavaScript


setTimeout(myFunction, 5000);

function myFunction() {
  console.log("I love You !!");
}


//----------------------------------------------------------------------------------------------------------------

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

//----------------------------------------------------------------------------------------------------------------
//Waiting for Intervals:

setInterval(myFunction, 2000);

function myFunction() {
  let d = new Date();
  console.log(d)
  console.log(d.getHours() + ":" +  d.getMinutes() + ":" +  d.getSeconds())
}

//----------------------------------------------------------------------------------------------------------------
//Waiting for Files

function myDisplayer(some) {
    console.log(some)
  }
  
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
getFile(myDisplayer);



//----------------------------------------------------------------------------------------------------------------
//JavaScript Promise Object

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });

    
// "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


//----------------------------------------------------------------------------------------------------------------

function myDisplayer(some) {
    console.log(some);
  }
  
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
});


myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);


//----------------------------------------------------------------------------------------------------------------
//JavaScript Promise Examples


setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}

//----------------------------------------------------------------------------------------------------------------

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  });




//----------------------------------------------------------------------------------------------------------------
