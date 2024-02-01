const country = "Croatia";
const continent = "Europe";
let population = 3.8;

console.log("My country: ", country);
console.log("Continent: ", continent);
console.log("Population: ", population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Croatian";

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

let description =
	country +
	" is in " +
	continent +
	", and its " +
	population +
	" million people speak " +
	language;

console.log(description);

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);

if (population > 33) {
	console.log(`${country}'s population is above average`);
} else {
	console.log(`${country}'s population is ${33 - population} below average.`);
}
