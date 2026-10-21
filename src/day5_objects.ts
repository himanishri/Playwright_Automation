//object
//object is a collection of key value pairs 
interface Person {
    name: string;
    age: number;
    city: string;
    email: string;
    bloodgroup: string;
}


const person0 : Person = {
    name: "Alice",
    age: 30,
    city: "New York",
    email: "person@example.com",
    bloodgroup: "A+",
};  

console.log(person0);
console.log(person0.name); // Output: Alice
console.log(person0.age);

const person1 = {
    name: "Ankush",
    age: 30,
    city: "New York",
    email: "person@example.com",
    bloodgroup: "A+",
}; 

console.log(person1.name);// Output: Ankush
const person2 = {
    name: "Dipesh",
    age: 30,
    city: "New York",
    email: "person@example.com",
    bloodgroup: "A+",

};  
console.log(person2.name);// Output: Dipesh 

person1.age = 31; // Updating the age property of person1
console.log(person1.age); // Output: 31

enum Browser {
    Chrome = "Google Chrome",
    Firefox = "Mozilla Firefox",
    Safari = "Apple Safari",
}

let myBrowser: Browser = Browser.Chrome;
console.log(myBrowser); // Output: "Google Chrome"

type BrowserType = "Chrome" | "Firefox" | "Safari";

type numbervalue = 1 | 2 | 3 | 4 | 5;

function getBrowserInfo(browser: BrowserType): string {     
    switch (browser) {
        case "Chrome":
            return "Google Chrome";
        case "Firefox":
            return "Mozilla Firefox";
        case "Safari":
            return "Apple Safari";
        default:
            return "Unknown Browser";
    }
}

//let number:numbervalue = "himani";

getBrowserInfo("Chrome"); // Output: "Google Chrome"


