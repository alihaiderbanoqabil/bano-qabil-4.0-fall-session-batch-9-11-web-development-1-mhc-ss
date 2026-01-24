"use strict";

// Cookie in JS
// this Keyword
// Functions vs Method
// Pure vs Impure Functions
// ES6 Classes
// JavaScript Date Object


// console.log("Class 9 of JS");

// // console.log("window", window);

// window.document.cookie
document.cookie = "username=ali;";
document.cookie = "username=ali haider;";
document.cookie = "age=27;";
document.cookie = "gender=male; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// console.log(document.cookie, "after setting cookies");


const object = {
    name: "ali",
    age: 27,
    // create a method to return object as cookie string
    greet: function () {
        console.log("this in object method regular function", this);

        return `name=${this.name}; age=${this.age};`;
    },
    greeting: (name, age) => {
        console.log("this in object method arrow function", this);
        return `name=${name}; age=${age};`;
    },
    add() {
        return this.age + 5;
    }
};

// console.log("this alone", this);

// function name() {
//     console.log("this in function", this);
// }


// name();

// console.log(object.age, "object");
// console.log(object.name, "object");
// console.log(object.greet(), "object");
// console.log(object.greeting("Hasnain", 25), "object");


// pure vs impure functions

// // pure function
// function add(a, b) {
//     const PI = 3.14; // constant value
//     return a + b + PI;
// }
// // impure function
// const age = 27;
// function addAge(a) {
//     return a + age;
// }
// function addRandom(a) {
//     return a + Math.random();
// }


class Person {
    constructor(name, age) {
        console.log(this, "before inside constructor");
        this.name = name;
        this.age = age;
        console.log(this, "afterinside constructor");
    }

    greet() {
        console.log("this in class method", this);
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// const person1 = new Person("Ali", 27);
// console.log(person1.greet());

// const person2 = new Person("Hasnain", 25);

// function name(name) {

// }

// name("ali")

// Date Object in JS
// const date = new Date();

// console.log("Date object:", date);
// console.log("getDay():", date.getDay()); // 0=Sun ... 6=Sat
// console.log("getDate():", date.getDate());
// console.log("getFullYear():", date.getFullYear());

// console.log("getHours():", date.getHours());
// console.log("getMinutes():", date.getMinutes());
// console.log("getSeconds():", date.getSeconds());
// console.log("getMilliseconds():", date.getMilliseconds());

// console.log("getTime():", date.getTime()); // timestamp (ms)

// console.log("getUTCDate():", date.getUTCDate());

// console.log("toDateString():", date.toDateString());
// console.log("toISOString():", date.toISOString());

// console.log("toLocaleString():", date.toLocaleString());
// console.log("toLocaleDateString():", date.toLocaleDateString());
// console.log("toLocaleTimeString():", date.toLocaleTimeString());


function setCookie(cookieName, cookieValue, expiryDays) {
    const date = new Date();
    const expiryDaysInMilliseconds = expiryDays * 24 * 60 * 60 * 1000;
    const dInMS = date.getTime();
    const totalTimeInMS = dInMS + expiryDaysInMilliseconds;

    date.setTime(totalTimeInMS);
    // console.log({ date, expiryDaysInMilliseconds, dInMS: dInMS, totalTimeInMS, utc: date.toUTCString() });
    let expires = "expires=" + date.toUTCString();
    // document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    const cookieString = `${cookieName}=${cookieValue}; ${expires}; path=/`;
    console.log("cookieString:", cookieString);
    document.cookie = cookieString;
}
// setCookie("testCookie", "testValue", 5);
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

// console.log(getCookie("username"), "cookie value");
// console.log(getCookie("userame"), "cookie value");


// intervals in JS

// console.log("before setInterval");

// let index = 0;

// const intervalId = setInterval(() => {
//     console.log("setInterval", index);
//     index++;
// }, 1000); // 1 second

// // const intervalId = setInterval(() => {
// //     console.log("setInterval", index);
// //     index++;
// // }, 0); // 0 ms


// function resetInterval() {
//     clearInterval(intervalId);
// }

// console.log("after setInterval");
console.log("before setTimeout");

let index = 0;

const timeoutId = setTimeout(() => {
    console.log("setTimeout", index);
    index++;
}, 5000); // 1 second

// const timeoutId = setTimeout(() => {
//     console.log("setTimeout", index);
//     index++;
// }, 0); // 0 ms


function resetTimeout() {
    clearTimeout(timeoutId);
}

console.log("after setTimeout");