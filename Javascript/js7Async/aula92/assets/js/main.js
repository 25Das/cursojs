/* eslint-disable no-restricted-syntax */
function carregaElementosNaPagina(json) {
	const table = document.createElement('table');

	for (const pessoa of json) {
		const tr = document.createElement('tr');

		let td = document.createElement('td');
		td.innerHTML = pessoa.nome;
		tr.appendChild(td);

		td = document.createElement('td');
		td.innerHTML = pessoa.idade;
		tr.appendChild(td);

		// td = document.createElement('td');
		// td.innerHTML = pessoa.salario;
		// tr.appendChild(td);

		table.appendChild(tr);
	}

	const resultado = document.querySelector('.resultado');
	resultado.appendChild(table);
}

axios('pessoas.json').then(res => carregaElementosNaPagina(res.data));

// fetch('pessoas.json')
// 	.then(res => res.json())
// 	.then(json => carregaElementosNaPagina(json));
