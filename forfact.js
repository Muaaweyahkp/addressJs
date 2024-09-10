const prompt = require('prompt-sync')({ sigint: true });
let n = prompt("Enter a number to find its factorial = ");

let f = 1;

for (let i = 1; i <= n; i++) {
    f *= i;
}

console.log("The factorial of " + n + " is: " + factorial);
