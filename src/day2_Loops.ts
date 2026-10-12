for(let i = 0; i <= 10; i++){
    console.log(i);
}


for(let i = 10; i >= 0; i--){
    console.log("second for loop");
    if(i%2 === 0){
        console.log(i);
    }
}

let sum = 0;
let total = 0;


for(let i = 1; i <= 5; i++){
    //sum += i;
    total += i;
    total = total + i;
}

//Iterations
// sum+i=sum;
// 0+1=1
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15

//fibo series: 0,1,1,2,3,5,8,13,21,34

//while loops
console.log("while loop");
let counter = 0;
while(counter < 10){
    console.log("while loop");
    console.log(counter);
    counter++;
}

console.log("second while loop");
let countdown = 5;
while(countdown > 10){
    console.log(countdown);
    countdown--;
}
//iterations
//countdown=5
//countdown=4
//countdown=3
//countdown=2
//countdown=1
//countdown=0

let n=10;
do{
    console.log("print do while loop once even though n>3");
    console.log(n);
    n++;
} while(n < 3);
console.log(n);