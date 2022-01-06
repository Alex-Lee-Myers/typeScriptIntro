//! 2.14 - Properties
//* Overview
    // Interfaces are often associated with the idea of coding with intent and defining what we're going to need for something before we get into the weeds of creating that thing. Let's look at a starter interface.

interface AnimalExample {
    name: string;
    numLegs: number;
}

//*No Instantiation
// One rule of interfaces is that you can't instantiate them. The following would throw an error immediately:
// let a: Animal = new Animal();

//Interfaces aren't used to create objects. They are used to shape them. As the docs say: "One of TypeScript’s core principles is that type-checking focuses on the shape that values have."
//We impose an interface on an object or class to dictate certain aspects of how that object should be shaped.

//* Implementing An Interface

interface Animal {
    name: string;
    numLegs: number;
}

let lassie: Animal = {
    name: 'Lassie',
    numLegs: 4,
    type: 'dog',
    breed: 'Collie',
    age: 5
};

//! 2.15 - Methods
//* Overview
    // Interfaces have methods, but they can only have method signatures, not the implementation of the method. Let's review what a method signature is in TypeScript. Consider the following method:

//1
// sayHelloToFirstname(name: string) : string {
//     //2
//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name;
// }
//* Analysis
    // 1. This who line, up until the curly brace is the method/function signature. This includes the function's name, a name parameter and its type, and a return type of string.
    // 2. The code within the curly braces is the method implementation. This is what is going to happen inside the function when it is called, and it includes the result.

//* Methods and Interfacts
    // With that in mind, let's look back at interfaces. With a class, we could provide a full implementation of the method. In an interface, we simply create the method signature. Then, the object will provide its own implementation of the method, its own logic.

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}
            //1
class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    //2
    setTimeOfPurchase(d: Date) {
        console.log("Apples were purchased on ", d);
}
}

//3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));

//* Analysis
    // 1. Notice that we are "implementing" an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
    // 2. We implement the "setTimeOfPurchase" method in the class, and provide a basic implementation by logging the date to the console.
    // 3. We then create a new instance of the "Apples" class and call the "setTimeOfPurchase" method.