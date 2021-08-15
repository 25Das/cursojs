((idade, peso, altura) => {
	const sobrenome = 'Silva';

	function criaNome(nome) {
		return `${nome} ${sobrenome}`;
	}

	function falaNome() {
		console.log(criaNome('Daniel'));
	}

	falaNome();

	console.log(idade, peso, altura);
})(24, 84, 1.83);
