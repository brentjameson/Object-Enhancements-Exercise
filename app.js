// Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

/* Write an ES2015 Version */

const createInstructorEs2015 = (firstName, lastName) => {
    return {
        firstName, 
        lastName
      }
}

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


/* Write an ES2015 Version */

const favoriteNumber2015 = 42;

const instructor2015 = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite'
}

// Object Methods
var instructorOld = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

// Object Methods ES2015
/* Write an ES2015 Version */
const instructorNew = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`
    //   `${this.firstName}'
    //   " says ${sayBye}!`;
    }
  }

//   createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

const createAnimal = (species, verb, noise) => {
    return {
        species, 
        [verb]() {
            return noise
        },
    }
}

const d = createAnimal("dog", "bark", "Woooof!")