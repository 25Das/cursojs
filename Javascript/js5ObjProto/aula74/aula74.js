// Contrutora -> molde (classe)
function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	// this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;

// Instância
const pessoa1 = new Pessoa('Daniel', 'A.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Fernanda', 'S.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.log(data);
