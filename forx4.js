const prompt = require ('prompt-sync')({sigint:true});
let num = prompt (`Enter a number = `)
let i = 0;
let sum = 0;
for( i=1; i<=num; i++){
    console.log(i)
}
