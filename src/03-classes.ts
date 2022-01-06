//! Properties
//*Overview
//Harnessing the power of ES6, we can make custom types in conjunction with TypeScript, while also simulating the experience of traditional Object Oriented Programming. Many developers moving from Java, C#, and other OOP languages, often site this as a source of frustration with JavaScript: There are no types or classes

// Yes, ES6 did provide classes, but as the MDN docs say, these classes still involve the prototype chain and are just 'syntactic sugar'. They are not classes in the traditional, OOP sense.

// With TypeScript, we are more able to build a development environment that highly resembles a classical OOP environment, which allows for type safety and allows for instantiation of custom types/classes. Let's see this working.

//!Code Snippet
//!1. Create a class
//! class Person { //* _______redone and extended on line 44______  \\*
//!     //2. Create a constructor
//!     firstName: string;
//!     lastName: string;
//! }

//* //3
//! let phil: Person = new Person();

//* //4
//! phil.firstName = "Phil";
//! phil.lastName = "Donahue";


//* Analysis
    // 1) Using the "class" keyword, we create a new class called Person. Just to be clear, this is not a part of TypeScript. This is part of ES6.
    // 2) We create 2 properties with types in that class. Here TypeScript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.
    // 3) We instantiate(create an instance) of the class by setting the type to "Person" and calling the "new" keyword to create a new instance of the class.
    // 4) Back to the top code. We set the properties on the instance of the "joeDude" property.

//! Instantiating a Class
// Instantiation means to create a new instance of a class. Think of the class as the cookie-cutter, and the object as the cookie. The cookie cutter is used over and over to make new cookies. Each cookie might have different property values, but at the end of the day, they are all cookies.
// Here is the pattern at a closer look:
    //1                 //2    //3    //4
// let someVariableName: Person = new Person();
    //1. We declare a variable with our own custom name.
    //2. We declare the type. It's a custom type of Person.
    //3. We use the "new" keyword to instantiate a new instance.
    //4. We call the class with parens. The parens invoke the constructor function.

//! Methods 2.09
// Methods can be described as functions inside the body of a class.
// Let's add a method to our Person class:
class Person {
    //1
    firstName: string;
    lastName: string;

    //2
    sayHello() {
        //3
        return "Hello " + this.firstName + " " + this.lastName;
    }

}

//4
let kenn: Person = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello(); //"Hello Kenn"

//* Analysis
    // 1) These two variables are the properties of the class. They should be above the methods.
    // 2) Here we have a method. This is a function that prints "Hello, " then a name to the console.
    // 3) this.firstName will refer to the firstName for the specific instance of the class.
    // 4) We instantiate the Person() class with a variable name of "kenn".
    // 5) We set the property of firstName to "Kenn" for this specific instance.
    // 6) We call the method on the _kenn_ object. Because the firstName of _kenn_ is set to "Kenn", this will print "Hello Kenn" to the console.

//! Key Rule of Methods
// Notice that with methods in our class that you don't have to use the function keyword.

//* Practice
    // 1) Create a method called sayHelloToFullname that says hello to someone by full name.
    // 2) Instantiate(create a new instance of) the person class.
    // 3) Set the first name property to 'Sheriff' and the last name property to 'Holler'.
    // 4) Call the sayHelloToFullname method on the instance of the class.
    // 5) Print the result to the console.

