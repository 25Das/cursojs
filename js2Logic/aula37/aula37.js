const pessoa = {
	nome: 'Daniel',
	sobrenome: 'Silva'
};

for (const chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

// const nomes = ['Daniel', 'Alves', 'Silva'];

//* For Clássico - Geralmente com iteráveis (arrays ou strings)
//* For In - Retorna o índice ou chaves (strings, arrays ou objetos)
//* For Of - Retorna o valor em sí (iteráveis (arrays ou strings))

// for (let i = 0; i < nomes.length; i++) {
// 	console.log(nomes[i]);
// }
// console.log('\n')

// for (const i in nomes) {
// 	console.log(nomes[i]);
// }
// console.log('\n')

// for (const valor of nomes) {
// 	console.log(valor)
// }
// console.log('\n')

// nomes.forEach(function (valor, indice, array) {
// 	console.log(valor, indice, array)
// });
