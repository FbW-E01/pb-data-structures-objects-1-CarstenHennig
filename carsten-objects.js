// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
  name: "Carsten",
  age: 50,
  profession: "Long-time Student",
};

for (name in person) {
  console.log(Object.keys(person), Object.values(person));
}

// **2. Get Values.**
// Create a function that returns an array of all **values** of an object's properties.
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output:
// ```javascript
// ["tea", "coffee", "milk"]
// ```

const getObjectValues = {
  choice1: "Tea",
  choice2: "Coffee",
  choice3: "Milk",
};

console.log(Object.values(getObjectValues));

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string.
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith",
//   job: "driver",
//   age: 20,
//   city: Paris
// }
// ```
// * Example of Expected Output
// "Michael Smith is a 20 year old driver in Paris".

let newPerson = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`
    );
  },
};
newPerson.print();

// ## Bonus Questions

// **1. Convert keys and values into an array.**
// Create a function that converts an object into an array of keys and values.
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// ```
// * Expected output:
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

const objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};
console.log(Object.entries(objectToArray));

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// ```
// * Expected output:
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]]
// ```

const objectToArrayAnimals = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
console.log(Object.entries(objectToArrayAnimals));

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object.
// * Example
// ```javascript
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// ```
// * Expected output:
// ```javascript
// ["name", "class", "course"]
// ```

let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
properties = function () {
  console.log(Object.keys(student));
};

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object.
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values?
// In merging these two objects, do you expect to change either or both of the original objects?
// Why or why not? Comment your answers.

let first = { firstName: "John" };
let last = { lastName: "Smith" };
let fullName1 = first.firstName + " " + last.lastName;
console.log(fullName1);
let fullName2 = Object.assign(first, last);
console.log(fullName2);

// If we set last = { firstName: "John"} as well and merge them, it will displayed 'undefined' because it's already defined

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example:
// ```javascript
// let person = {
//   name: "John",
//   job: "teacher"
// }
// ```
// * Expected Output:
// ```javascript
// {"John": name, "teacher": job}
// ```

let swapPerson = {
  name: "John",
  job: "teacher",
};

function swap(json) {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}
console.log(swap(swapPerson));

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays:
// one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```

const keysValues = { a: 1, b: 2, c: 3 };

const keyArray = Object.values(keysValues);
const valuesArray = Object.keys(keysValues);
// console.log(keyArray, valuesArray);

const totalArray = [];
totalArray.push(keyArray);
totalArray.push(valuesArray);
console.log(totalArray);

// let keysArr = [];
// let valuesArr = [];

// function swap2(data) {
//   for (var key in data) {
//     keysArr.push(key);
//     //    dataToString = data[key].toString();
//     //    console.log(typeof dataToString);
//     valuesArr.push(data[key]);
//   }
//   console.log(keysArr, valuesArr);
// }

// swap2(keysValues);
