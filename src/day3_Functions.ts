function greet(): string {
    return `Hello, welcome to TypeScript!`;
}

const message = greet();
console.log(message);

function greetUser(name: string) {
    return `Hello, ${name}! Welcome to TypeScript!`;
}

const userMessage = greetUser("John"); //method1
console.log(userMessage);
console.log(greetUser("Alice")); //method2

function addNumbers(a: number, b: number) {
    return a + b;
}

console.log(addNumbers(5, 10)); // Output: 15
console.log(addNumbers(3.5, 2.5)); // Output: 6

function multiplyNumbers(a: number, b: number) { //(here a and b are parameters)
    console.log(a * b);
}

multiplyNumbers(4, 5); //here a and b are arguments 

//There are 2 types of functions in TypeScript
// void function, function that does not return anything
// functions which have return type

function greetmessage(name: string = "Guest"): void {
    console.log(`Hello, ${name}!`);
}

greetmessage(); // Output: Hello, Guest!
greetmessage("Alice"); // Output: Hello, Alice!

function calculate(a: number, b: number): [number,number] {
    const sum = a + b;
    const product = a * b;
    return [sum, product];
}

const [sum, product] = calculate(5, 10);
console.log(`Sum: ${sum}, Product: ${product}`); // Output: Sum: 15, Product: 50

const calculateArrow = function(a: number, b: number): number {
    return a + b;
}


console.log(calculateArrow(5, 10)); // Output: 15
console.log(calculateArrow(3.5, 2.5)); // Output: 6

const multiplyArrow = (a: number, b: number): number => {
    return a * b;
};           //arrow function with block body

console.log(multiplyArrow(4, 5)); // Output: 20

const multiplyArrowShort = (a: number, b: number): number => a * b; //arrow function with concise body

console.log(multiplyArrowShort(4, 5)); // Output: 20

function demo(){
    const value = 10;
    console.log(value);
}

demo(); // Output: 10
// console.log(value); // Error: 'value' is not defined, because it is scoped to the function 'demo'