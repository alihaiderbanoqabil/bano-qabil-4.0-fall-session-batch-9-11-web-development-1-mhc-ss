
// https://www.w3schools.com/js/js_this.asp

console.log("Class 6 of JS");
// const capitalize = (string) => string.split(" ").map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1)
// }).join(" ")

// console.log(capitalize("Class 6 of JS"));
// console.log(capitalize("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati laudantium asperiores recusandae soluta voluptate reiciendis quam vero eum dignissimos voluptatibus perspiciatis consectetur, enim quo possimus ab maxime alias inventore?"));
// regulat function 
// function greeting() {
//     console.log(`Hello Good Morning!`);
// }
// greeting()   
// function greeting(name = "ali", age = 10) {
//     console.log(`Hello ${name}! Good Morning, your age is ${age}`);
// }

// greeting()
// greeting("muhammad")
// greeting("ali", 27)
// greeting("hasnain", 20)
// greeting("usman", 25)


// function sum(num1, num2) {
//     console.log({ num1, num2, sum: num1 + num2 });
//     console.log("num1:", num1, "num2:", num2, "sum:", num1 + num2);
// }

// function sum(num1, num2) {
//     const sum = num1 + num2;
//     console.log({ num1, num2, sum });

//     // document.writeln(sum)
//     document.writeln(`<h1>${sum}</h1>`)
// }

// function sum(num1, num2) {
//     const sum = num1 + num2;
//     //  console.log({ num1, num2, sum });
//     return sum;
// }
// function sum(num1, num2, num3) {
//     const sum = num1 + num2;
//     //  console.log({ num1, num2, sum });
//     return sum;
// }

// function sum(num1, num2, num3) {
//     const sum = num1 + num2 + num3;
//     console.log({ num1, num2, num3, sum });
//     return sum;
// }
// function sum(num1, num2, num3, num4, num5, num6) {
//     const sum = num1 + num2 + num3;
//     return sum;
// }

// console.log(sum(10, 20, 30, 40, 50, 60));
// console.log(sum(50, 100));
// document.writeln(sum(500, 50))
// alert(sum(100, 50, 40, 50))
// function greet(name, age, gender, city, country, phone) {
//     console.log({ name, age, gender, city, country, phone });

// }
// function greet({ name, age, gender, city, country, phone }) {
//     console.log({ name, age, gender, city, country, phone });

// }

// greet({
//     phone: "29283129789",
//     age: 20,
//     name: "ali",
//     country: "Pakistan",
//     city: "Karachi",
//     gender: "male",
// })

// console.log(sum(10, 10, 10));

// function sum(num1, num2, num3) {
//     console.log(arguments, "arguments");

//     return num1 + num2 + num3;
// }
// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }


// // arrow function 
// console.log(sum(10, 10, 10));

// const sum = (num1, num2) => {
//     const sum = num1 + num2;
//     // console.log({ num1, num2, sum });
//     return sum;
// }

// const age = 20;
// let isAdult;

// if (age > 10) {
//     isAdult = true
// } else {
//     isAdult = false
// }
// if (age > 10) isAdult = true
// else isAdult = false

// const sum = (num1, num2) => {
//     console.log(arguments, "arguments");

//     return num1 + num2;
// }

// // OR 

// // const sum = (num1, num2) => num1 + num2;

// document.write(sum(400, 400))



// function sumOfNNumbers() {
//     // console.log(arguments, "arguments");
//     let sum = 0;
//     for (const element of arguments) {
//         sum = sum + element;
//         // return sum;
//     }
//     return sum;
// }

// // sumOfNNumbers()
// console.log(sumOfNNumbers(10, 20, 30, 40, 50));
// console.log(sumOfNNumbers(100, 20, 30, 40, 50, 60, 70, 80, 90, 100));


// let abc = function () {

// }

// let xyz = () => {

// }



