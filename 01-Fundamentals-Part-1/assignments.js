const country = "Croatia";
const continent = "Europe";
let population = 3.8;

// console.log("My country: ", country);
// console.log("Continent: ", continent);
// console.log("Population: ", population);

const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

language = "Croatian";

// console.log(population / 2);

// population++;

// console.log(population);
// console.log(population > 6);
// console.log(population < 33);

// let description =
// 	country +
// 	" is in " +
// 	continent +
// 	", and its " +
// 	population +
// 	" million people speak " +
// 	language;

// console.log(description);

// description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

// console.log(description);

// if (population > 33) {
// 	console.log(`${country}'s population is above average`);
// } else {
// 	console.log(`${country}'s population is ${33 - population} below average.`);
// }

// console.log("9" - "5"); // -> 4
// console.log("19" - "13" + "17"); // -> 617
// console.log("19" - "13" + 17); // -> 23
// console.log("123" < 57); // -> false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// numNeighbours = Number(
// 	prompt("How many neighbour countries does your contry have?")
// );

// if (numNeighbours === 1) {
// 	console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
// 	console.log(`More than 1 border!`);
// } else {
// 	console.log(`No borders!`);
// }

// if (language === "English" && population < 50 && !isIsland) {
// 	console.log(`You should live in ${country} :)`);
// } else {
// 	console.log(`${country} does not meet your criteria :(`);
// }

// switch (language) {
// 	case "chinese":
// 	case "mandarin":
// 		console.log(`MOST number of native speakers!`);
// 		break;

// 	case "spansih":
// 		console.log(`2nd place in number of native speakers`);
// 		break;

// 	case "english":
// 		console.log(`3rd place`);
// 		break;

// 	case "hindi":
// 		console.log(`Number 4`);
// 		break;

// 	case "arabic":
// 		console.log(`5th most spoken language`);
// 		break;

// 	default:
// 		console.log(`Great language too :D`);
// }

console.log(
	`${country}'s population is ${population > 33 ? "above" : "below"} average`
);
