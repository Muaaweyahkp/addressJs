const prompt = require("prompt-sync")({sigInt:true});

const fruit = prompt(`Enter the name of a fruit = `);

switch(fruit){
    case `apple`:
    console.log(`250rs/kg`);
    break;
    case `orange`:
    console.log(`100rs/kg`);
    break;
    case `banana`:
    console.log(`40rs/kg`);
    break;
    case `papaya`:
    console.log(`80rs/kg`);
    break;
    case `mango`:
    console.log(`120rs/kg`);
    break;
    default:
    console.log(`Wrong input`);
}