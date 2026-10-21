class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;// this keyword is used to refer to the current instance of the class. It allows us to access the properties and methods of the class within its own context.    
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`${this.brand} ${this.model} engine started.`);
    }

    stopEngine(): void {
        console.log(`${this.brand} ${this.model} engine stopped.`);
    }
}

const car1 = new Car("Toyota", "Camry", 2022);
car1.startEngine();

//Access Modifiers in TypeScript:
//Public: Members are accessible from anywhere.
//Private: Members are accessible only within the class.
//Protected: Members are accessible within the class and its subclasses.            

class Person {
    protected name: string        

    constructor(name: string) {
        this.name = name;
    }  
    
    consoleName(): void {
        console.log(`Name: ${this.name}`);
    }

}


const person1 = new Person("Alice");    
person1.consoleName();
//console.log(person1.name); // Error: Property 'name' is private and only accessible within class 'Person'.  

class Employee extends Person {
    showName(): void {
        console.log(`Employee Name: ${this.name}`); // Accessing protected member from subclass
    }   

}

const employee1 = new Employee("Bob");
employee1.showName(); // Output: Employee Name: Bob

//Encapsulation in TypeScript:
class BankAccount {
    private balance: number = 0; 
    
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }   
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount; //this.balance = this.balance + amount    
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        }  
    } 

    getBalance(): number {
            return this.balance;
        }
    }

const account = new BankAccount(1000);
account.deposit(500);   
console.log(account.getBalance());

//polymorphism in TypeScript:
class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }

    dogSpecificMethod(): void {
        console.log("This method is specific to Dog class.");
    }
}     
class Cat extends Animal {
    override makeSound(): void {
        console.log("Meow");
    }   
}

class Dog extends Animal {
    override makeSound(): void {
        console.log("Woof");
    }  

    dogSpecificMethod(): void {
        console.log("This method is specific to Dog class.");
    }
    
   
}

const myAnimal = new Animal();
const dog = new Dog();     
const myCat = new Cat();   
myCat.makeSound(); // Output: Meow
dog.makeSound(); // Output: Woof



//abstract class in TypeScript:
abstract class Shape {
    abstract calculateArea(): number{
        console.log("This is an abstract method. Subclasses must implement it.");
    } // Abstract method without implementation
    calculatePerimeter(): number {
        return 0; // Default implementation (can be overridden in subclasses)
    }
}

abstract class performlogin{
    abstract enterusername(): void; // Abstract method without implementation
    abstract enterpassword(): void; // Abstract method without implementation
    abstract pressEnter(): void; // Abstract method without implementation
    abstract clickNext(): void; // Abstract method without implementation
    clickforgot(): void {
        console.log("Clicking Next...");
    }
}

class Login extends performlogin {
    enterusername(): void {
        console.log("Entering username...");
    }   
    enterpassword(): void {
        console.log("Entering password...");
    }   
    pressEnter(): void {
        console.log("Pressing Enter...");
    }   
    clickNext(): void {
        console.log("Clicking Next...");
    }   
}

const login = new Login();
login.enterusername();
login.enterpassword();
login.pressEnter();
login.clickNext();




