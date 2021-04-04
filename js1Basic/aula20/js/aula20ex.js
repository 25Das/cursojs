function meuEscopo() {
	const form = document.querySelector('.form');
	const resultado = document.querySelector('.resultado');

	const pessoas = [];

	function recebeEventoForm(evento) {
		evento.preventDefault();

		const nome = form.querySelector('.nome');
		const sobrenome = form.querySelector('.sobrenome');
		const peso = form.querySelector('.peso');
		const altura = form.querySelector('.altura');
		// console.log(nome.value, sobrenome.value, peso.value, altura.value);

		const pessoasDados = {
			nome: nome.value,
			sobrenome: sobrenome.value,
			peso: peso.value,
			altura: altura.value,
		};
		// console.log(pessoasDados);

		pessoas.push(pessoasDados);
		console.log(pessoas);

		resultado.innerHTML = `<p>Nome: ${pessoasDados.nome}.</p>`;
		resultado.innerHTML += `<p>Sobrenome: ${pessoasDados.sobrenome}.</p>`;
		resultado.innerHTML += `<p>Peso: ${pessoasDados.peso}Kg.</p>`;
		resultado.innerHTML += `<p>Altura: ${pessoasDados.altura}m.</p>`;
	}

	form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

//* Outro modo de prevenir comportamento padrão do navegador
// form.onsubmit = function (evento) {
// 	evento.preventDefault();
// 	alert(1);
// 	console.log('Foi Enviado!');
// };
