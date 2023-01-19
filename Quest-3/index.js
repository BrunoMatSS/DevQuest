function somar(num1, num2) {
	let soma = num1 + num2;
	return 'A soma dos dois números é: ' + soma;
}


function subtrair(num1, num2) {
	let subtracao = num1 - num2;
	return 'A subtração dos dois números é: ' + subtracao;
}


function dividir(num1, num2) {
	let divisao = num1 / num2;
	return 'A divisao dos dois números é: ' + divisao;
}


function multiplicar(num1, num2) {
	let multiplicacao = num1 * num2;
	return 'A multiplicacao dos dois números é: ' + multiplicacao;
}

let a = 4
let b = 5

console.log(somar(a, b));
console.log(subtrair(a, b));
console.log(dividir(a, b));
console.log(multiplicar(a, b));
