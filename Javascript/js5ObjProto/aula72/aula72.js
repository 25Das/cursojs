// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	let estoquePrivado = estoque;

	Object.defineProperty(this, 'estoque', {
		enumerable: true, // visível?
		configurable: true, // reconfigurável?

		get() {
			return estoquePrivado; // estoque;
		},
		set(valor) {
			if (typeof valor !== 'number') {
				throw new TypeError('Mensagem');
			}

			estoquePrivado = valor;
		},
	});
}

function criaProduto(nome) {
	let nomeProduto = nome;
	return {
		get nome() {
			return nomeProduto;
		},
		set nome(valor) {
			let valorDoSetter = valor;
			valorDoSetter = valor.replace('coisa.', '');

			nomeProduto = valorDoSetter;
		},
	};
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);
