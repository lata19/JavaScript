/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Nikola");
console.log(23);

let firstName = "Bob";
console.log(firstName);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Latincic";
console.log(lastName);


const now = 2024;
const ageNikola = now - 1997;
const ageSarah = now - 2018;
console.log(ageNikola, ageSarah);

console.log(ageNikola * 2, ageNikola / 2, 2 ** 3);

const firstName = "Nikola";
const lastName = "Latincic";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operator
console.log(ageNikola > ageSarah);
console.log(ageSarah <= 18);

console.log(age - 1997 > now - 2018);

const now = 2024;
const ageNikola = now - 1997;
const ageSarah = now - 2018;

console.log(now - 1997 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageNikola + ageSarah) / 2;
console.log(ageNikola, ageSarah, averageAge);

const firstName = "Nikola";
const job = "teacher";
const birthYear = 1997;
const year = 2024;

const nikola =
	"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(nikola);

const nikolaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nikolaNew);

console.log(`Just a regular string...`);

console.log(
	"String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);
*/

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log(`Sarah can start driving license 🚗`);
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(century);
