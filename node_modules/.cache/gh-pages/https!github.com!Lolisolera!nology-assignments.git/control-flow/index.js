//1 - Challenge: Tell me the day!
let day = 7;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please enter a number between 1 and 7.");
}

/*----------------------------------------------------------------------------------------------------*/

//2 - Challenge: Eye Colour

//2 - A - Using else/if statement with an output of probabilities in %


const parent1 = "brown";  // this value is an argument that we're passing to the parameter? -Yes
const parent2 = "green";  // this value is an argument? -Yes


function getChildEyeColorProbabilities(parent1, parent2) {
    let probabilities;

    if (parent1 === "brown" && parent2 === "brown") {
        probabilities = {
            brown: "75%",
            green: "18.75%",
            blue: "6.25%"
        };
    } else if (
        (parent1 === "brown" && parent2 === "green") ||
        (parent1 === "green" && parent2 === "brown")
    ) {
        probabilities = {
            brown: "50%",
            green: "37.5%",
            blue: "12.5%"
        };
    } else if (
        (parent1 === "brown" && parent2 === "blue") ||
        (parent1 === "blue" && parent2 === "brown")
    ) {
        probabilities = {
            brown: "50%",
            green: "0%",
            blue: "50%"
        };
    } else if (parent1 === "green" && parent2 === "green") {
        probabilities = {
            brown: "<1%",
            green: "75%",
            blue: "25%"
        };
    } else if (
        (parent1 === "green" && parent2 === "blue") ||
        (parent1 === "blue" && parent2 === "green")
    ) {
        probabilities = {
            brown: "0%",
            green: "50%",
            blue: "50%"
        };
    } else if (parent1 === "blue" && parent2 === "blue") {
        probabilities = {
            brown: "0%",
            green: "1%",
            blue: "99%"
        };
    } else {
        console.log("Invalid eye colors provided.");
        return;
    }


    console.log(
        `Your eye colours are ${parent1} and ${parent2}. The chances of your child having blue eyes is ${probabilities.blue}, brown is ${probabilities.brown}, and green is ${probabilities.green}.`
    ); //I've used template literals to embed the values of parent1 and parent2 (generically) and will replace the values depending on the specific arguments passed, e.g. const parent1 = "brown"; 
    //const parent2 = "blue"; Then, ${probabilities.blue}, ${probabilities.green} and ${probabilities.brown} will embed the probablility values for each of the colours and will be replaced with 
    //the probabilities colour values (in %)for each of the probabilities.
    //my template literals will allow me to make strings dynamically, based on the values and variables inputed. 
}


// Call the function with the parent eye colors as parameters. 
getChildEyeColorProbabilities(parent1, parent2);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//2 - B - Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

const eyeColor = "green";
//const eyeColor = "blue";
//const eyeColor = "brown";
//const eyeColor = "purple";

switch (eyeColor) {
    case "green":
        console.log("Green is my favorite eye color!");
        break;

    case "blue":
        console.log("Blue is my least favorite eye color!");
        break;

    case "brown":
        console.log("Brown is a mediocre eye color.");
        break;

    default:
        console.log("Eye color is unknown.");
}







