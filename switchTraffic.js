const prompt = require("prompt-sync")({sigInt:true});

const light = prompt(`Enter a color in traffic = `)

switch(light){
    case "red":
        console.log(`You want to stop the vehicle`);
        break;
    case "green":
        console.log(`Start and move you vehicle`);
        break;
    case "yellow":
        console.log(`Be cautioned and drive`);
        break;
    default:
        console.log(`Wrong input`);
}