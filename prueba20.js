//JavaScript Function apply()

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

//----------------------------------------------------------------------------------------------------------------

//The Difference Between call() and apply()
//The difference is:
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

//----------------------------------------------------------------------------------------------------------------
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);


//----------------------------------------------------------------------------------------------------------------
//Simulate a Max Method on Arrays

Math.max(1,2,3);  // Will return 3

//----------------------------------------------------------------------------------------------------------------


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

//----------------------------------------------------------------------------------------------------------------










//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------