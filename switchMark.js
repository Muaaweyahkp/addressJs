const prompt = require("prompt-sync")({ sigint: true });

let grade = parseFloat(prompt("Enter your grade (0-100): "));


switch (true) {
    case (grade >= 80):
      console.log(`Your grade is A`)
        break;
    case (grade >= 60):
      console.log(`Your grade is b`)
        break;
    case (grade >= 40):
      console.log(`Your grade is C`)
        break;
    case (grade >= 30):
      console.log(`Your grade is D`)
        break;
    case (grade < 30):
        console.log(`Sorry you are failed`)
        break;
    default:
         console.log('wrong input');
}

