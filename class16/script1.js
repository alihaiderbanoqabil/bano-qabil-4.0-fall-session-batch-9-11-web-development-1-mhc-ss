// console.log("Testing");

// console.log(20 - 40);
// console.log(20 + 40);
// console.log(40 - 30);
// console.log(10 / 2);
// console.log(10 % 3);
// console.log(4 * 3);
// console.log(4 ** 3);
// console.log(Math.PI);
// console.log(Math.pow(2, 3));
// console.log(Math.random()); // 0 - 1
// console.log(Math.random() * 100); // 0 - 100
// console.log(Math.random() * 1000); // 0 - 1000
// console.log(Math.min(10, 20, 304)); 
// console.log(Math.max(10, 20, 304)); 


let num1 = 10;
// num1 = num1 + 1;
// num1++;
// num1++;
// num1++;
// num1 = num1 - 1;
// num1--;
// num1 = num1 + 10;

// console.log(num1, " num1 after adding 1");

let x = 10;
let y = 50;
// let z = x + y;
let z = x + y;

x = x + y;
x += y;
// console.log(z, " z value");
// console.log(x, " x value");

// console.log("10 > 20:", 10 > 20);     // false
// console.log("10 < 20:", 10 < 20);     // true
// console.log("10 <= 20:", 10 <= 20);   // true
// console.log("20 <= 20:", 20 <= 20);   // true
// console.log("20 >= 20:", 20 >= 20);   // true


// console.log('10 == "10":', 10 == "10");       // true
// console.log('10 === "10":', 10 === "10");     // false

// console.log('10 == "120":', 10 == "120");     // false
// console.log('10 === "120":', 10 === "120");   // false

// console.log('10 != "120":', 10 != "120");     // true
// console.log('10 != "10":', 10 != "10");       // false

// console.log('10 !== "10":', 10 !== "10");     // true

let age = 25;
let color = "red";

// if (age < 18) {
//     console.log("You are 18+");
// } else {
//     console.log("You are under 18");
// }

// if (age > 18 && color !== "red" && age === 25) {
//     console.log("You are 18+ and your favorite color is red");
// } else {
//     console.log("You are under 18");
// }

// if (age < 18 || color !== "red" || age === 25) {
//     console.log("You are 18+ and your favorite color is red");
// } else {
//     console.log("You are under 18");
// }

// if ((age > 18 && color !== "red") || age === 25) {
//     console.log("You are 18+ and your favorite color is red");
// } else {
//     console.log("You are under 18");
// }


if (age > 18 && (color !== "red" || age === 25)) {
    console.log("You are 18+ and your favorite color is red");
    if (color === "red") {
        console.log("color is red");
    } else {
        console.log("color is not red")
    }
} else {
    console.log("You are under 18");
    if (age === 25) {
        console.log("age is 25");
    } else {
        console.log("age is not 25")
    }
}
// if (age < 18) {
//     console.log("You are 18+");
// }



// else {
//     console.log("You are under 18");
// }


// function randomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// console.log("Random Color:", randomColor());

