// Filter -> Sempe retorna um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(valor => valor > 0);
// console.log(numerosFiltrados);

// Retorne os nomes que tem 5 ou mais letras
// Retorne as pessoas com mais de 15 anos
// Retorne os nome que terminam com A
const pessoas = [
	{ nome: 'Daniel', idade: 24 },
	{ nome: 'Fernanda', idade: 22 },
	{ nome: 'Riven', idade: 2 },
	{ nome: 'Jhin', idade: 1 },
	{ nome: 'Kayn', idade: 1 },
	{ nome: 'Clem', idade: 55 },
];

// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);

// const pessoasComMaisDeQuinzeAnos = pessoas.filter(obj => obj.idade > 15);
// console.log(pessoasComMaisDeQuinzeAnos);

const pessoasComNomeTerminadoEmA = pessoas.filter(obj =>
	obj.nome.toLowerCase().endsWith('a'),
);
console.log(pessoasComNomeTerminadoEmA);
