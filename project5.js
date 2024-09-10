const prompt = require("prompt-sync")({sigInt : true});

let unit = prompt (`Enter the count of units used = `);

if ( unit<=50 )
{
    console.log( unit * 0.50);
}
else if (unit <= 100){
    console.log( unit*0.75);
}
else if ( unit <= 200){
    console.log(unit*1)
}
else if ( unit <= 250){
    console.log( unit*1.5)
}
else if ( unit > 250){
    console.log( unit*2)
}
else {
    console.log(`wrong inputy`)
}