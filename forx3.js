const prompt = require('prompt-sync')({sigint:true});

let num = prompt(`Enter the numberv = `);

for(i=1 ; i<=num ; i+=2){
console.log(i);
}