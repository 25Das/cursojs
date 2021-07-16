class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	falar() {
		console.log(`${this.nome} esta falando.`);
	}
}

function Pessoa2(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
	console.log(`${this.nome} esta falando.`);
};

const p1 = new Pessoa('Daniel', 'Silva');
const p2 = new Pessoa2('Fernanda', 'Santos');
console.log(p1);
console.log(p2);
