// const pessoa1 = {
// 	nome: 'Daniel',
// 	sobrenome: 'Silva',
// 	idade: 24,
// };

// const pessoa2 = {
// 	nome: 'Fernanda',
// 	sobrenome: 'Santos',
// 	idade: 22,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa(nome, sobrenome, idade) {
// 	return {
// 		nome,
// 		sobrenome,
// 		idade,
// 	};
// }

// const pessoa1 = criaPessoa('Daniel', 'Silva', 24);
// const pessoa2 = criaPessoa('Fernanda', 'Santos', 22);
// const pessoa4 = criaPessoa('Riven', 'Silva', 1);
// const pessoa3 = criaPessoa('Jhin', 'Silva', 1);
// const pessoa5 = criaPessoa('Kayn', 'Silva', 1);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);

const pessoa1 = {
	nome: 'Daniel',
	sobrenome: 'Silva',
	idade: 24,

	fala() {
		console.log(`A minha idade atual é ${this.idade}.`);
	},

	incrementaIdade() {
		this.idade += 1;
	},
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
