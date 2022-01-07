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
    sayHelloToFirstname() {
        return "Hello " + this.firstName;
    }

    sayHelloToFullname() {
        //3
        return "Hello " + this.firstName + " " + this.lastName;
    }

}

//4
let kenn: Person = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHelloToFirstname(); //"Hello Kenn"

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

let sherrif: Person = new Person();
sherrif.firstName = "Sheriff";
sherrif.lastName = "Holler";
sherrif.sayHelloToFullname();
console.log(sherrif.sayHelloToFullname()); //"Hello Sheriff Holler"


//! Contstructors
class Game {
    name: string;
    maker: string;

    constructor(name: string, maker: string) {
        this.name = name;
        this.maker = maker;
    }
}
let battleShip: Game = new Game("Battle Ship", "Hasbro");
//* Below is instantiating the class with no constructor. Then we have to set the properties manually. Constructor? One line of code.
// let monopoly: GameWithoutConstructor = new GameWithoutConstructor();
// monopoly.gameName = 'Monopoly';
// monopoly.gameMaker = 'Hasbro';

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}
let tesla : Automobile
//* Example One
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
// Example Two
                //1
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3

//* Analysis
    // 1) The "extends" keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both "Motorcycle" and "Automobile" inherit from "Vehicle".
    // 2) Note that these are properties declared in the subclass. The Motorcycle class does not have access to the "isSelfDriving" property and the "Automobile" class does not have access to "easyToDoWheelie".
    // 3) These are properties from the parent class, the "Vehicle" class. They are inherited properties.
class UserApiResObj {
    id: number;
    username: string;
}
// ----> Inject the UserApiResObj class into class Comments.user: UserApiResObj.
class Comments {
    id: number;
    text: string;
    user: UserApiResObj;
}

//! PRACTICE
// 1) Create a class called "Animal" with 3 properties: type, breed, and age.
// 2) Create two subclasses, Bear and Tiger, that each has a property unique.
// 3) Instantiate both classes and add values for properties to each.

class Animal {
    type: string;
    breed: string;
    age: number;
}

class Bear extends Animal {
    unique: string;
}

class Tiger extends Animal {
    unique: string;
}

let myBear: Bear = new Bear();
myBear.type = "Bear";
myBear.breed = "Grizzly";
myBear.age = 3;
myBear.unique = "Grizzly Bear";

let myTiger: Tiger = new Tiger();
myTiger.type = "Tiger";
myTiger.breed = "Bengal";
myTiger.age = 2;
myTiger.unique = "Bengal Tiger";
//! End of Practice

// 2.12 - Parameter Properties
//* Overview
    // Parameter properties allow us to make our classes even more streamlined by allowing us to declare property types and accessors in our constructor parameters.

//* class Store {
//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }

// let ikea: Store = new Store('Ikea', 'Fishers');

//* One of the most elegant augmentations that TypeScript has made comes with parameter properties. The pattern above has become quite common over the years, and we can now use TypeScript to streamline a lot of the code above in our constructor.

//* Let's refactor the code above for line 188 to the following:
class Store {
    constructor(public name: string, public city: string) {
    }
}

let ikea: Store = new Store('Ikea', 'Fishers');


//* Analysis
//Again, the code above is a shortified version of the first version of the Store class. Let's look at a few things:
    // 1) We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.
    // 2) With this approach, we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name; this.city = city;
//TypeScript infers that there is a property called a name that will be the value of the argument that is passed into the constructor.

//Note: This type of constructor is used in almost every Angular component that you'll see these days.

//* Accessors
//* Overview
    // JavaScript has public and private accessors, but they are taken care of in the constructor. Take a look here (Links to an external site.) for a review with Douglas Crockford.
    // TypeScript has brought us more explicit keywords for determining the accessibility of a member using the "private" and "public" keywords. In terms of classes, this allows us to keep certain members private to the class for internal use.

class Employee extends Person{
    private _salary: number;

    getSalary(): number {
        return this._salary;
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
let salaryResult: number = newEmployee.getSalary();
console.log("The salary is: " + salaryResult); //"The salary is: 30000"

//* Analysis
    // 1) The "private" keyword is used to declare a property that is only accessible within the class.
    // 2) We have a class called Employee that extends "Person".
    // 3) We create a private property, denoted by the "private" keyword.
    // 4) It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.
    // 5) We have a method called "setSalary" that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.
    // 6) We have a method called  that returns a string. Inside the method, we perform so low-level business logic of converting the salary number value to a string in the return statement.