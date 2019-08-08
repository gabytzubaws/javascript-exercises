function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce(function(current, total){
		return total + current;
	},0);
}

function multiply (array) {
	return array.length ? array.reduce((total, current) => total * current) : 0;
}

function power(a,b) {
	return Math.pow(a,b);

}

function factorial(a) {
	if(a == 0) return 1;
	let product = 1;
	for(let i = a; i > 0; i--)
		product *= i;
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
