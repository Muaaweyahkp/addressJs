// positive , negetive % 

const prompt = require("prompt-sync")({sigint:true});

let num = prompt(`enter a number = `) ;

if(isNaN(num)){
    console.log(`error`)
}
else if ( num>0){
    console.log(`Positive number`);
}
else if(num< 0){
    console.log(`negative number`);
}
else if (num == 0){
    console.log(`zero`)
}