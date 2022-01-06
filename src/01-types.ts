//! Declare types with initalization and assign values
//1         //2         //3
let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorID: number = 5;
// 1 declare a variable called username
// 2 give it a string value
// 3 declare the value as "instructor"

//! Declare types w/o initializing
//we can also just declare a value and type without initialization
// let password: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

//we also have implicit  typing, where we don't have to specify the type
let greeting = "Hello";

// we can also still declare variables without any type or value like javascript
let address;

//! Basic Types
//* Primitive Types - string, number, boolean, null, undefined, symbol

//* Numbers
let age: number = 37;
let currentYear: number = 2022;
// typescript also supports ES6 octal literals
// _ can be used instead of commas for numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//* Strings
let companyName: string;
companyName = "Eleven Fifty";
//typescript is a superset of JS, so single/double quotes are fine, consistency is important
let appName: string = 'Twitter';
appName: "Instagram";

//* Booleans
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
let isGoldLevelUser: boolean = true;

//* Array
// array are also a type in TS. they can be expressed in two different ways: 
// 1. using the type of the elements in the array
let names: string[] = ["John", "Jane", "Mary"];
// 2. using the type of the array itself
let allScores: Array<number> = [100, 92, 95, 98, 99];
// option 1 is much more prevalent in TS

//accessing the array indices works the same way as in JS
console.log(names[0]);
console.log("The first name is " + names[0]);
console.log("allScores:" + allScores[0]);

//* Any
//* any is a type that can be assigned any value

let dataFromThirdParty: any = "12345";
console.log(dataFromThirdParty); //date from third party
console.log(typeof dataFromThirdParty); //string

dataFromThirdParty = 12345;
console.log(dataFromThirdParty); //12345
console.log(typeof dataFromThirdParty); //number

//* Void
//* void is a type that can only be assigned null or undefined
let error: void = undefined;
function sayHelloToAll(): void {
    console.log("Hello to all");
}
// why does Void exist? because we can't return a value from a function

//* Tuple
//* Tuples types allows you to create an array with multiple different types
//* Tuple's are arrays that have a fixed number of elements
//* Tuple's are useful when we want to return multiple values from a function
// tuples types allow you to create an array with multiple types of elements. (notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but the items need to different types. You may want this for a key value pair:
//Declare a tuple type
let usernameAndId: [number, string];
//Initialize it
usernameAndId = [1, "john"]; //ok
//usernameAndId = [1, "john", true]; //error

//* Enum | Enumeration
//* Enum's are a way to create a set of named constants
//* Enums allow us to give names to number values.
enum WeaponType {Sword, Saber, Spear, Bow, Staff, Wand, StaffOfWizardry, StaffOfFlying};
let weapon: WeaponType = WeaponType.Staff; //0

//like arrays, enums start at 0, but that starting index can be changed
enum CardType { Ace = 1, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King };
let cardType: string = CardType[2]; // "Two"
console.log(cardType); // "Two"

//! Union types
//* Union types allow us to combine multiple types into one type
//* Union types are useful when we want to accept multiple types of values
// Union types allow us to have more flexibility with our variables, but we still keep the intent of declaring a specific type for our variables.
// Consider the following example:
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
// or
let x: number | string;
let y: number | null;
//now the variables can take on more than one type
x = '1234';
x = 1234;
//note the following would throw an error
//x = true;
//y = '1234'; or y=false;
//next is how union types are used with Optionals
let myFavoriteNumber2: number | null;
myFavoriteNumber2 = 1234;
myFavoriteNumber2 = null;

//! 2.07 Optionals
//* Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out if needed. Optionals are declared using a question mark after them. Add the following code:
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString); // underfined, This is optional
    return numOne + numTwo;
}

addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); 

// 1) The first two parameters, numOne and numTwo, are required. The third parameter, someString, is optional.
// 2) Since someString is optional, it does not require an argument when the function is called.
// 3) We also call the function with an argument provided for someString.
// 4) If you hover of the function call you'll notice the type on someString? is a union type of "string | undefined". If a value is passed in, it should be of type string. If a value is not passed in, it is of type "undefined".

//TODO Key Rule
//* It's important to note the following rule::
//* Optional params must go after all required params.

//! Practice Problem
// 1) Write a function that has three parameters: first, middle, last.
// 2) The middle param should be optional and the first and last should be required strings.
// 3) If a value is passed in for the middle, concatenate the fullname and include the middle name.
// 4) If a value is not passed in for middle, concatenate the fulname with just first and last.
// 5) Return the fullname.
// 6) Remember optional params must go after all required params.

function fullName(first: string, last: string, middle?: string){
    if(middle){
        return first + " " + middle + " " + last;
    }
    else {
        return first + " " + last;
    }
}

console.log(fullName("John", "Doe"));
console.log(fullName("John", "Doe", "Lee"));

