const pessoa = {
	nome: 'Daniel',
	sobrenome: 'Silva',
	idade: 24
};

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

//******************************************************************************

// const frutas = ['Pêra', 'Maçã', 'Uva'];

// FOR IN: lê os índices do array ou chaves do objeto
// for (const i in frutas) {
// 	const fruta = frutas[i];
// 	console.log(fruta)
// }


// for (let i = 0; i < frutas.length; i++) {
// 	const fruta = frutas[i];
// 	console.log(fruta)
// }
