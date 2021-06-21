// Some todos os números (reduce)
// Retorn um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce((acumulador, valor) => {
// 	let ac = acumulador;

// 	if (valor % 2 === 0) {
// 		ac += valor; // Reduce
// 	}
// 	// if (valor % 8 === 0) ac.push(valor); // Filter
// 	// ac.push(valor * 2); // Map

// 	return ac;
// }, 0);
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
	{ nome: 'Daniel', idade: 24 },
	{ nome: 'Fernanda', idade: 22 },
	{ nome: 'Riven', idade: 2 },
	{ nome: 'Jhin', idade: 1 },
	{ nome: 'Kayn', idade: 1 },
	{ nome: 'Ordis', idade: 55 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
	if (acumulador.idade > valor.idade) return acumulador;
	return valor;
});

console.log(maisVelha);
