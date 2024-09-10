const prompt = require('prompt-sync')({sigint:true});
let num = prompt(`enter a number = `)

let i = 2;
do{
    console.log(i);
    i+=2;
}
while(i<=num)