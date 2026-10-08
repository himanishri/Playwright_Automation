console.log("hello typescript");
let userName = "Ankush"; //it can be redeclared and reassigned
const password = 1234; //cannot be redeclared and reassigned
console.log(userName);

userName = "Himani";
console.log(userName);

let price = 99;
let isloggedIn = false;
let item = null;
let floatvalue = 11.5;

console.log(typeof(price));
console.log(typeof(isloggedIn));
console.log(typeof(item));
console.log(typeof(floatvalue));
console.log(typeof(userName));

console.log(`Hello ${userName}`); //Hello Himani
console.log(`Add 2 and 3 is equals to ${2+3}`);


const text = "Learning Playwright   ";
console.log(text.length); //length of your string
console.log(text.includes("Play")); //true
console.log(text.toUpperCase());
console.log(text.trim());

console.log("5"+3);
console.log("5"-3);
console.log("5" * "2");

console.log(8%2); //mod operator
console.log((2+3)*4); //arithmatic  operation

console.log(5>3); //true
console.log(5>=4); //true

console.log(5===5); //same type and same value
console.log(5 !== 6); //not equal
 
console.log("break");
console.log(5 === "5"); //false
console.log(5 == "5");  //true

const temperature = 30;
if(temperature > 30){
    console.log("It is hot outside");
}
else if(temperature === 30){
    console.log("It is 30 degree outside");
}
else if(temperature === 29){
    console.log("It is 29 degree outside");
}
else if(temperature === 10){
    console.log("It is 10 degree outside");
}
else{
    console.log("It is not hot outside");
}

const day:string = "anyday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    default:
        console.log("Invalid day");
}       

console.log("Ankush Made Some Changes");