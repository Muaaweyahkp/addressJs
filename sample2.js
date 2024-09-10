const prompt = require("prompt-sync")({sigint:true});

let num = prompt(` enter a number to find its factorial = `)

let factorial = 1 ;

for (let i = 1 ; i<= num ; i++){
    factorial = factorial*i ;
}

console.log(` Factorial of ${num} is ${factorial}`);