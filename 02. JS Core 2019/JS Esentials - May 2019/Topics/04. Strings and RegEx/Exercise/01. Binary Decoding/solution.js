function solve() {
	let input = document.querySelector('input').value,
		sum = input,
		output = [];

	while (sum > 9) {
		sum = sum.toString()
			.split('')
			.map(x => +x)
			.reduce((a, b) => a + b);
	}
	sum = +sum;
	input = input.slice(sum, input.length - sum)
		.split(/(.{1,8})/g).filter(part => part !== '');

	input.forEach(part => {
		let letter = String.fromCharCode(parseInt(part, 2));
		output.push(letter);
	});

	output = output.filter(x => /[A-Za-z\s]/.test(x)).join('');

	document.querySelector('#resultOutput').textContent = output;
}