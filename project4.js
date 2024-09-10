const prompt = require("prompt-sync")({sigint:true});

let month = prompt(`Enter a month = `)

if( month === `jan` || month === `feb` || month === `mar`){
    console.log(`Autumn season`);
}

else if( month === `apr` || month === `may` ||month ===  `jun`){
    console.log(`summer season`);
}
else if( month === `jul` || month === `aug` || month === `sep` ){
    console.log(` rainy season`);
}
else if ( month === `oct` || month === `nov` || month === `Dec` ){
    console.log(`Winter season`);
}
else{
    console.log(`wrong input`)
}
