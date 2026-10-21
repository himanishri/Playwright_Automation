function printValue(value: string |  number): void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else if (typeof value === "number") {
        console.log(`Number value: ${value}`);
    }
}

printValue("Hello"); // Output: String value: Hello
printValue(42); // Output: Number value: 42


//opening webpage
//sending giving a input and clicking on a button
//response from the server
//waiting for the response from the server

//promises in typescript
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner. 

//pending: The initial state of a Promise when it is created. It indicates that the asynchronous operation is still in progress and has not yet completed or failed.
//fulfilled: The state of a Promise when the asynchronous operation has completed successfully.
//rejected: The state of a Promise when the asynchronous operation has failed.  

const AutomationPromise: Promise<string> = new Promise((resolve, reject) => {
    const isSuccess = true; // Simulating success or failure
    if (isSuccess) {
        resolve("Operation completed successfully!");
    } else {
        reject("Operation failed!");
    }
}); 

AutomationPromise.then((result) => {
    console.log(result); // Output: Operation completed successfully!
});

//async and await

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); // Simulating a delay of 2 seconds
    });     
}   

async function main(): Promise<void>{
    const result = await fetchData();
    console.log(result);
}

main();

//try catch block in typescript

try{
    throw new Error("Something went wrong!");
} catch (error) {
   console.log("An error occurred:", error);
} finally {
   console.log("Execution completed.");
}