// Dobre os números
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento retorne uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
	{ nome: 'Daniel', idade: 24 },
	{ nome: 'Fernanda', idade: 22 },
	{ nome: 'Riven', idade: 2 },
	{ nome: 'Jhin', idade: 1 },
	{ nome: 'Kayn', idade: 1 },
	{ nome: 'Ordis', idade: 55 },
];

// const nomes = pessoas.map(obj => obj.nome);
// const idades = pessoas.map(obj => ({ idade: obj.idade }));

const id = pessoas.map((obj, indice) => {
	const newObj = { ...obj };
	newObj.id = indice;
	return newObj;
});

// console.log(pessoas);
console.log(id);
