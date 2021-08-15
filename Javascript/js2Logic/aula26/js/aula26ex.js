function meuEscopo() {
	const form = document.querySelector('#form');

	function criaP() {
		const p = document.createElement('p');
		return p;
	}
	function setResultado(msg, isValid) {
		const resultado = document.querySelector('#resultado');
		resultado.innerHTML = '';

		const p = criaP();

		if (isValid) {
			p.classList.add('good');
		} else {
			p.classList.add('bad');
		}

		p.innerHTML = msg;
		resultado.appendChild(p);
	}
	function getImc(peso, altura) {
		const imc = peso / altura ** 2;
		return imc.toFixed(2);
	}
	function getImcCategory(imc) {
		const category = [
			'Abaixo do peso',
			'Peso normal',
			'Sobrepeso',
			'Obesidade grau 1',
			'Obesidade grau 2',
			'Obesidade grau 3',
		];

		if (imc >= 40) return category[5];
		if (imc >= 35) return category[4];
		if (imc >= 30) return category[3];
		if (imc >= 25) return category[2];
		if (imc >= 18.5) return category[1];
		if (imc < 18.5) return category[0];

		return imc;
	}

	form.addEventListener('submit', e => {
		e.preventDefault();

		const inputPeso = e.target.querySelector('#peso');
		const inputAltura = e.target.querySelector('#altura');

		const peso = Number(inputPeso.value);
		const altura = Number(inputAltura.value);

		if (!peso && !altura) {
			setResultado('Peso e sua altura inválidos.', false);
			return;
		}
		if (!peso) {
			setResultado('Peso inválido.', false);
			return;
		}
		if (!altura) {
			setResultado('Altura inválida', false);
			return;
		}

		const imc = getImc(peso, altura);
		const imcCategory = getImcCategory(imc);

		const msg = `Seu IMC é ${imc} (${imcCategory}).`;

		setResultado(msg, true);
	});
}
meuEscopo();
