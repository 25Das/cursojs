// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
	Object.defineProperty(this, 'estoque', {
		enumerable: true, // visível?
		value: estoque, // valor da chave
		writable: true, // editável?
		configurable: true, // reconfigurável?
	});

	Object.defineProperties(this, {
		nome: {
			enumerable: true, // visível?
			value: nome, // valor da chave
			writable: true, // editável?
			configurable: true, // reconfigurável?
		},
		preco: {
			enumerable: true, // visível?
			value: preco, // valor da chave
			writable: true, // editável?
			configurable: true, // reconfigurável?
		},
	});
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

// for (const chave in p1) {
// 	console.log(chave);
// }
