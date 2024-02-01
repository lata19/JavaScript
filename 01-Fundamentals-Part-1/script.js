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


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0. '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 5000;
if (money) {
	console.log(`Don't spend it all ;)`);
} else {
	console.log(`You should get a job!`);
}

let height = 1.91;
if (height) {
	console.log(`YAY! Height is defined`);
} else {
	console.log(`Height is UNDEFINED`);
}


const age = "18";
if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

"18" == 18; // -> true
"18" === 18; // -> false

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 19) {
	console.log(`Cool! 19 is an amazing number`);
} else if (favourite === 7) {
	console.log(`7 is also a cool number`);
} else if (favourite === 9) {
	console.log(`9 is also a cool number`);
} else if (favourite === 23) {
	console.log(`23 is also a cool number`);
} else {
	console.log(`Number is not 19 or 7 or 9 or 23`);
}

if (favourite != 19) {
	console.log(`Why not the 19?`);
}
*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
// 	console.log(`Sarah is able to drive!`);
// } else {
// 	console.log(`Someone else should drive...`);
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log(`Sarah is able to drive!`);
} else {
	console.log(`Someone else should drive...`);
}
