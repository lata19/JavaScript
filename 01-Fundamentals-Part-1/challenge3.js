dolphinsFirstScore = 97;
dolphinsSecondScore = 112;
dolphinsThirdScore = 101;

koalasFirstScore = 109;
koalasSecondScore = 95;
koalasThirdScore = 106;

dolphinsAverageScore =
	(dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;

koalasAverageScore =
	(koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
	console.log(
		`Dolphins (${dolphinsAverageScore}) win against Koalas (${koalasAverageScore})`
	);
} else if (
	dolphinsAverageScore < koalasAverageScore &&
	koalasAverageScore > 100
) {
	console.log(
		`Koalas (${koalasAverageScore}) win against Dolphins (${dolphinsAverageScore})`
	);
} else if (
	dolphinsAverageScore === koalasAverageScore &&
	koalasAverageScore > 100 &&
	dolphinsAverageScore > 100
) {
	console.log(`It's a draw!`);
} else {
	console.log(`Nobody wins!`);
}
