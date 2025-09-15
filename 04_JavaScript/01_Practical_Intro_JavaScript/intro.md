# JavaScript Introduction (`intro.js`)

This file demonstrates basic JavaScript concepts, including variable declaration, data types, conditionals, loops, functions, and string operations.

## 1. Printing Values

```js
console.log("Inside Intro!");
```
- Prints a message to the console.

## 2. Variables and Data Types

- Variables are declared using `let`.
- Default value is `undefined`.
- JavaScript is dynamically typed; variables can hold different types.

```js
let varName;
varName = 10;         // Number
varName = "I'm String"; // String
varName = 10.1;       // Float
varName = true;       // Boolean
console.log(typeof varName); // Prints the type
```

### Primitive Types
- number, string, boolean, null, undefined, bigInt, symbol

### Non-Primitive Types
- functions, arrays, objects

## 3. Conditionals

### If/Else Example

```js
let number = 11;
if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### If/Else If Ladder

```js
let day = "sat";
if(day=="mon" || day=="Tue" || day=="Wed"){
    console.log("Work");
}else if(day=="sat"){
    console.log("Low Work");
}else{
    console.log("Sleep");
}
```

### Switch Case

```js
let fruit = "mango";
switch(fruit){
    case "apple":
    case "pinapple":
    case "mango":
        console.log("this is a fruit");
        break;
    default:
        console.log("Unknown Fruit");
}
```

## 4. Loops

### For Loop

```js
for(let num=1;num<=10;num++){
    console.log("number is:", num);
}
```

## 5. Functions

### Basic Function

```js
function fn(){
    console.log("Hello Sahil 2");
}
fn();
```

### Function with Parameters and Return

```js
function add(a, b){
    let d = a + b;
    return d;
}
let result = add(10,20);
console.log("result :" , result);
```

### Palindrome Checker

Checks if a string is a palindrome without using built-in reverse:

```js
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}
```

Checks if a string is a palindrome using the built-in reverse method:

```js
function isPalindromeWithReverse(str) {
    return str === str.split("").reverse().join("");
}
```

## 6. Strings

- Strings can be declared with `"`, `'`, or `` ` `` (template literals).
- Template literals support multi-line strings.

```js
let str1 = "I am String";
let str2 = 'I am String';
let str3 = `I am Also String
            But Can Be Multiple Line`;
```

### String Concatenation

```js
function greet(firstNameVar){
    console.log("hi " + firstNameVar + " !");
    console.log(`hi ${firstNameVar} !` );
}
let firstName = "Sahil";
greet(firstName);
```

---

This file is a practical introduction to JavaScript basics, suitable for beginners learning about variables, types, control flow, loops, functions, and string manipulation.
