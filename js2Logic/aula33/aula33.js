const pessoa = {
	nome: 'Daniel',
	sobrenome: 'Silva',
	idade: 24,
	endereco: {
		rua: 'Avenida X',
		numero: 2,
	},
};

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);
