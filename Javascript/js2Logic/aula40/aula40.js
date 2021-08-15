const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue: continua para a próxima iteração
// Break: sai do laço

// for (const numero of numeros) {
// for (const i in numeros) {
// for (let i = 0; i < numeros.length; i++) {
let i = 0;
// while (i < numeros.length) {
	do {
	const numero = numeros[i];

	if (numero === 2) {
		console.log('Pulei o número 2!');
		i++;
		continue;
	}

	console.log(numero);

	if (numero === 7) {
		console.log('7 encontrado, saindo ...');
		i++;
		break;
	}
	i++;
} while (i < numeros.length);

