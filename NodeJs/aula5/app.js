const path = require('path');

const caminhoArquivo = path.resolve(__dirname, 'teste.json');

// const escreve = require('./modules/escrever');

const ler = require('./modules/ler');

/* const pessoas = [{ nome: 'Daniel' }, { nome: 'Fernanda' }, { nome: 'Riven' }, { nome: 'Jhin' }];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json); */

function mostraDados(data) {
	const dados = JSON.parse(data);

	dados.forEach(val => {
		console.log(val.nome);
	});
}

async function leArquivo(caminho) {
	const dados = await ler(caminho);
	mostraDados(dados);
}

leArquivo(caminhoArquivo);
