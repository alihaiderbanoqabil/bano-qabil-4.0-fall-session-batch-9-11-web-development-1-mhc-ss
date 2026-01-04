/**
 * Class 4 of JS - Demonstrating JavaScript object copying techniques
 * 
 * This script illustrates the differences between:
 * - Primitive value assignment (pass by value)
 * - Reference copying (shallow copy)
 * - Deep copying (nested object/array copying)
 * - JSON serialization and deserialization
 * 
 * @file Demonstrates object copying methods and JSON manipulation
 * @author [Your Name]
 * @version 1.0.0
 */

/**
 * Demonstrates primitive value assignment (pass by value)
 * Changes to name2 do not affect name1
 * @type {string}
 */

/**
 * Complex object with nested properties
 * @type {Object}
 * @property {string} name - Person's full name
 * @property {number} age - Person's age
 * @property {Object} address - Address information
 * @property {string} address.city - City of residence
 * @property {string} address.state - State of residence
 * @property {number} address.zip - Postal code
 * @property {Array<string>} hobbies - List of hobbies/interests
 */

/**
 * Demonstrates deep copying using spread operator
 * Modifications to person2 do not affect person1's nested properties
 * @type {Object}
 */

/**
 * Demonstrates deep copying using JSON stringify/parse method
 * Creates a completely independent copy of the object
 * @type {Object}
 */

/**
 * Converts person1 object to JSON string format
 * @type {string}
 */

/**
 * Parses JSON string back into a JavaScript object
 * @type {Object}
 */

console.log("Class 4 of JS");

let name1 = "John Doe";
let name2 = name1;
name2 = "Jane Smith";

// console.log("Name 1:", name1);
// console.log("Name 2:", name2);


let person1 = {
    name: "Alice",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
        zip: 10001
    },
    hobbies: ["reading", "traveling", "swimming"]
};
// let person2 = person1; // Reference copy

// let person2 = { ...person1 }; // Shallow copy
// person2.address = { ...person1.address }; // Manually copying nested object
// person2.hobbies = [...person1.hobbies]; // Manually copying array
let person2 = {
    ...person1,
    address: { ...person1.address },
    hobbies: [...person1.hobbies]
};
person2.age = 31;
person2.address.city = "Los Angeles";
person2.hobbies.push("cooking");
person2.hobbies.push("running");

// const object = { a: 1, b: 2, c: 3 };
// const array = [4, 5, 6, 7, 8];
// console.log("Person 1:", person1, typeof person1);
// console.log("Person 2:", person2);


let person3 = JSON.parse(JSON.stringify(person1)); // Deep copy using JSON methods
person3.age = 32;
person3.address.city = "Chicago";
person3.hobbies.push("dancing");
// console.log("Person 1 after person3 modification:", person1);
// console.log("Person 3:", person3);

// console.log(typeof "ali haider");
// console.log(typeof 27);
// console.log(typeof person1);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof array);
// console.log(typeof true);


// const jsonString = JSON.stringify(person1);
// const jsonString = JSON.stringify(person1, null, 2); // Pretty print with 2 spaces indentation
const jsonString = JSON.stringify(person1, undefined, 4); // Pretty print with 4 spaces indentation
// console.log("JSON String of Person 1:", jsonString, typeof jsonString);

const parsedObject = JSON.parse(jsonString);
// const parsedObject = JSON.parse("ali haider"); // This will throw an error
// console.log("Parsed Object:", parsedObject, typeof parsedObject);



const object1 = { a: 1, b: 2, c: "3" };
const array1 = [4, 5, 6, 7, 8];

let object2 = { ...object1 }; // spread operator for object
let array2 = [...array1]; // spread operator for array

// delete object1.b;
// delete array1[0]; // instead of delete, better to use splice for arrays or rest operator to create a new array without the element
// const [first, second, ...restArray] = array1;
const [first, ...restArray] = array1;
// console.log("array1:", array1);

// console.log("first:", first);
// // console.log("second:", second);
// console.log("restArray:", restArray);

const { a, ...restObject } = object1;

console.log("object1:", object1);
console.log("a:", a);
console.log("restObject:", restObject);


// const [first, ...restArray] = array1; // rest operator to create a new array without the first element
// console.log("object1:", object1);
// console.log("object2:", object2);
// console.log("array1:", array1);
// console.log("array2:", array2);


console.log("window: ", window);

// alert("This is an alert box!");

// window.alert("This is an alert box from window object!");

// const userInput = prompt("This is a prompt box! Please enter your name: ");
// console.log({ userInput: userInput });
// console.log({ userInput });

// const areYouSure = confirm("This is a confirm box! Do you want to proceed?");

// console.log(areYouSure, "areYouSure");

// type casting / type conversion in js

// const num1 = prompt("Enter first number: ");
// const num2 = prompt("Enter second number: ");
// const sum = num1 + num2;
// const number1 = Number(num1);
// const number2 = Number(num2);
// const add = number1 + number2;

// console.log(number1, typeof number1);
// console.log(number2, typeof number2);

// console.log({ num1, num2, sum, add }); // ES6 shorthand property names


// console.log(typeof String(70), String(70));
console.log(typeof Boolean(70), Boolean(70));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(''));
console.log(Boolean(``));
console.log(Boolean(false));
console.log(Boolean(" "));
console.log(Boolean("hello"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1 }));

console.log(Number("ali haider"));

console.log(parseInt("ali"));
console.log(parseInt("20"));
console.log(parseInt("20.80"));
console.log(parseFloat("20.80"));



