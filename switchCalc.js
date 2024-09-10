const prompt = require("prompt-sync")({sigInt:true});

const num1 = parseInt(prompt(`Enter a number = `));
const num2 = parseInt(prompt(`Enter another  number = `));

const operator = prompt(`choose an operator + - x / = `)

switch(operator){
    case"+":
     result = num1 + num2;
     console.log(`${num1} + ${num2} = ${result}`)
    break;
    case"-":
    result = num1 - num2;
     console.log(`${num1} - ${num2} = ${result}`)
    break;
    case"*":
    result = num1 * num2;
     console.log(`${num1} * ${num2} = ${result}`)
    break;
    case"/":
    result = num1 / num2;
     console.log(`${num1} / ${num2} = ${result}`)
    break;
    default:
        console.log(`invalid input`);
    

}