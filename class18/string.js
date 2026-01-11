// Below is your **same code rewritten with proper `console.log()` logs and short explanations**, so you can run it as a clean script instead of console-by-console typing.

// ---

// ### String basics

// ```js
// const name = "ali Haider";
// console.log("name:", name);

// console.log("Length:", name.length); // 10
// console.log("Index 0:", name[0]); // 'a'
// console.log("Index 2:", name[2]); // 'i'

// console.log("charAt(0):", name.charAt(0)); // 'a'
// console.log("charAt(2):", name.charAt(2)); // 'i'

// console.log("at(0):", name.at(0)); // 'a'
// console.log("Last char using charAt:", name.charAt(name.length - 1)); // 'r'
// console.log("Last char using at(-1):", name.at(-1)); // 'r'
// console.log("at(1):", name.at(1)); // 'l'
// console.log("at(-2):", name.at(-2)); // 'e'
// ```

// ---

// ### Syntax error explanation

// ```js
// // ❌ const gender = "male"l
// // Error: Unexpected identifier 'l'
// // Reason: extra character `l` after the string

// const gender = "male"; // ✅ correct
// console.log("gender:", gender);
// ```

// ---

// ### String concatenation

// ```js
// console.log(name.concat(gender, "Karachi"));
// // ali HaidermaleKarachi

// console.log(name.concat(" ", gender, " ", "Karachi"));
// // ali Haider male Karachi

// console.log(`${name} ${gender} Karachi`);
// // ali Haider male Karachi
// ```

// ---

// ### Case conversion

// ```js
// console.log(name.toLowerCase()); // ali haider
// console.log(name.toUpperCase()); // ALI HAIDER
// ```

// ---

// ### startsWith / endsWith

// ```js
// console.log(name.startsWith("a")); // true
// console.log(name.startsWith("ali")); // true
// console.log(name.startsWith("alu")); // false
// console.log(name.startsWith("Al")); // false (case-sensitive)
// console.log(name.startsWith("al", 6)); // false

// console.log(name.endsWith("r")); // true
// console.log(name.endsWith("er")); // true
// console.log(name.endsWith("haider")); // false
// console.log(name.endsWith("Haider")); // true
// ```

// ---

// ### includes

// ```js
// console.log(name.includes("i")); // true
// console.log(name.includes("ai")); // true
// console.log(name.includes("ai", 6)); // false
// ```

// ---

// ### trim

// ```js
// const fullName = "           ali     haider     ";

// console.log(fullName.trim()); 
// // "ali     haider"

// console.log(fullName.trimStart()); 
// // "ali     haider     "

// console.log(fullName.trimEnd()); 
// // "           ali     haider"
// ```

// ---

// ### split

// ```js
// console.log(name.split());
// // ['ali Haider']

// console.log(name.split(""));
// // ['a','l','i',' ','H','a','i','d','e','r']

// console.log(name.split(" "));
// // ['ali', 'Haider']

// const sentence =
//   "Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.";

// console.log(sentence.split(" "));
// ```

// ---

// ### indexOf / lastIndexOf

// ```js
// console.log(name.indexOf("a")); // 0
// console.log(name.indexOf("i")); // 2
// console.log(name.lastIndexOf("a")); // 5
// ```

// ---

// ### replace / replaceAll / regex

// ```js
// const str =
//   "Searches a string for a pattern, and returns a string where the first match is replaced match";

// console.log(str.replace("match", "same"));
// // replaces first match only

// console.log(str.replaceAll("match", "same"));
// // replaces all matches (case-sensitive)

// console.log(str.replace(/match/, "same"));
// // regex, first match only

// console.log(str.replace(/match/i, "same"));
// // case-insensitive, first match

// console.log(str.replace(/Match/ig, "same"));
// // case-insensitive + global (all)
// ```

// ---

// ### 🔑 Key Takeaways

// * Strings are **immutable** (original string never changes)
// * `at()` supports **negative indexes**
// * `startsWith`, `endsWith`, `includes` are **case-sensitive**
// * `replace()` → first match
// * `replaceAll()` or `/g` regex → all matches

// If you want, I can also:

// * Convert this into **notes**
// * Turn it into a **practice task**
// * Explain **regex flags (`i`, `g`) visually**
