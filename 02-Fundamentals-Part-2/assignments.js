/*
function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

const country1 = describeCountry("Croatia", 3.8, "Zagreb");
const country2 = describeCountry("Germany", 84, "Berlin");
const country3 = describeCountry("Finland", 6, "Helsinki");

console.log(country1);
console.log(country2);
console.log(country3);


function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

percentageChina1 = percentageOfWorld1(1441);
percentageCroatia1 = percentageOfWorld1(3.8);
percentageGermany1 = percentageOfWorld1(84);

console.log(percentageChina1);
console.log(percentageCroatia1);
console.log(percentageGermany1);


const percentageOfWorld3 = (population) => (population / 7900) * 100;

percentageChina3 = percentageOfWorld3(1441);
percentageUSA3 = percentageOfWorld3(332);
percentageGermany3 = percentageOfWorld3(84);

console.log(percentageChina3);
console.log(percentageUSA3);
console.log(percentageGermany3);


function describePopulation(country, population) {
	const percentage = percentageOfWorld1(population);
	return `${country} has ${population} million people, which is about ${percentage} of the world`;
}

describeChina = describePopulation("China", 1441);
describeUSA = describePopulation("USA", 332);
describeGermany = describePopulation("Germany", 84);

console.log(describeChina);
console.log(describeUSA);
console.log(describeGermany);


const populations = [1441, 332, 84, 3.8];
console.log(populations.length === 4);

const percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3]),
];

console.log(percentages);


neighbours = [
	"Slovenia",
	"Bosina and Herzegovina",
	"Hungary",
	"Serbia",
	"Montenegro",
	"Italy",
];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
	console.log("Probably not a central european country :D'");
}

neighbours[neighbours.indexOf("Serbia")] = "Republic Serbia";
console.log(neighbours);


myCountry = {
	country: "Croatia",
	capital: "Zagreb",
	language: "croatian",
	population: 3.8,
	neighbours: [
		"Slovenia",
		"Bosina and Herzegovina",
		"Hungary",
		"Serbia",
		"Montenegro",
		"Italy",
	],
	describe: function () {
		console.log(
			`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
		);
	},
	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;
		// this.isIsland = !Boolean(this.neighbours.length)
	},
};

console.log(
	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);


myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

for (let i = 1; i < 51; i++) {
  console.log(`Voter number ${i} is currently voting`);


const populations = [1441, 332, 84, 3.8];

percentages2 = [];
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
	percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);


listOfNeighbours = [
  ["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
	}
}

*/
const populations = [1441, 332, 84, 3.8];
const percentages3 = [];

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
	percentages3.push(percentageOfWorld1(populations[i]));
	i++;
}

console.log(percentages3);
