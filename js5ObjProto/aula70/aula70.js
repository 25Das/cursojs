// const pessoa1 = {
// 	nome: 'Daniel',
// 	sobrenome: 'Silva',
// 	idade: 25,
// 	falarNome() {
// 		return `${this.nome} está falando seu nome.`;
// 	},
// 	getDataNascimento() {
// 		const dataAtual = new Date();
// 		return dataAtual.getFullYear() - this.idade;
// 	},
// };

// for (const chave in pessoa1) {
// 	console.log(pessoa1[chave]);
// }

// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) {
// 	return {
// 		nome,
// 		sobrenome,
// 		/* get */ nomecompleto() {
// 			return `${this.nome} ${this.sobrenome}`;
// 		},
// 	};
// }

// const p1 = criaPessoa('Daniel', 'Silva');
// console.log(p1.nomecompleto());

function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;

	Object.freeze(this);
}

const p1 = new Pessoa('Daniel', 'Silva');
delete p1.nome;
const p2 = new Pessoa('Fernanda', 'Silva');

console.log(p1);
console.log(p2);
