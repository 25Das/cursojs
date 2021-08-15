function rand(min, max) {
	const minMs = min * 1000;
	const maxMs = max * 1000;
	return Math.floor(Math.random() * (maxMs - minMs) + minMs);
}

function esperaAi(msg, tempo) {
	return new Promise((resolve, reject) => {
		if (typeof msg !== 'string') reject('BAD VALUE');

		setTimeout(() => {
			resolve(msg);
		}, tempo);
	});
}

esperaAi('Conexão com o BD.', rand(1, 3))
	.then(resposta => {
		console.log(resposta);
		return esperaAi('Buscando dados da BASE.', rand(1, 3));
	})
	.then(resposta => {
		console.log(resposta);
		return esperaAi(22222, rand(1, 3));
	})
	.then(resposta => {
		console.log(resposta);
	})
	.then(() => {
		console.log('Exibe os dados na tela.');
	})
	.catch(e => {
		console.log('ERRO:', e);
	});

console.log('Isso aqui será exibido antes de qualquer promisse.');
