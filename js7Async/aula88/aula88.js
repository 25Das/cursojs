function rand(min, max) {
	const minMs = min * 1000;
	const maxMs = max * 1000;
	return Math.floor(Math.random() * (maxMs - minMs) + minMs);
}

function esperaAi(msg, tempo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof msg !== 'string') {
				reject(new Error('CAI NO ERRO'));
				return;
			}

			resolve(`${msg.toUpperCase()} - Passei na promise`);
		}, tempo);
	});
}

// Promisse.all / Promisse.race / Promisse.resolve / Promisse.reject

/* const promises = [
	esperaAi(1000, rand(1, 5)), // Erro
	esperaAi('Promise 1', rand(1, 5)),
	esperaAi('Promise 2', rand(1, 5)),
	esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises)
	.then(valor => {
		console.log(valor);
	})
	.catch(erro => {
		console.log(erro);
	});
 */
//

function baixaPagina() {
	const emCache = true;

	if (emCache) {
		return Promise.resolve('Página em cache');
	}
	return esperaAi('Baixei a página', rand(1, 3));
}

baixaPagina()
	.then(dadosPagina => console.log(dadosPagina))
	.catch(e => console.log('ERRO', e));
