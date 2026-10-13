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