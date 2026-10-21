const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Accessing elements in the array
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango
console.log(fruits[4]); // Output: Grapes       
console.log(fruits.length); // Output: 5

fruits.push("Pineapple"); // Adding an element to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"]

fruits.pop(); // Removing the last element from the array
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

fruits.unshift("Strawberry"); // Adding an element to the beginning of the array
console.log(fruits); // Output: ["Strawberry", "Apple", "Banana", "Mango", "Orange", "Grapes"]

fruits.shift(); // Removing the first element from the array
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

fruits.splice(2, 1); // Removing 1 element at index 2
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grapes"]

fruits[2] = "Blueberry"; // Updating the element at index 2
console.log(fruits); // Output: ["Apple", "Banana", "Blueberry", "Grapes"]

fruits.splice(1, 1, 'kiwi', 'grape'); // Adding 'kiwi' and 'grape' at index 1 without removing any element
console.log(fruits); // Output: ["Apple", "kiwi", "grape", "Banana", "Blueberry", "Grapes"]

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (const ele of fruits) {
    console.log(ele);
}

fruits.forEach((ele) => {
    console.log(ele);
});

fruits.forEach(function (ele) {
    console.log(ele);
});

//map, filter, reduce, find, findIndex, some, every, includes, indexOf, lastIndexOf, sort, reverse  
 
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10 ]

const doubleNumbers2 = numbers.map(function (num) {
    return num * 2;
});
console.log(doubleNumbers2); // Output: [2, 4, 6, 8, 10 ]   

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


const numbergreaterThanThree = numbers.find((num) => num > 3); //first matching element
console.log(numbergreaterThanThree); // Output: 4

const bignumber = numbers.find((num) => num > 100); //first matching element index
console.log(bignumber); // Output: 3


const sortnumbers = numbers.sort((a, b) => b - a); //descending order
console.log(sortnumbers); // Output: [5, 4, 3, 2, 1]