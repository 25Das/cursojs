function Calculadora() {
	this.display = document.querySelector('.display');

	this.pressionaEnter = () => {
		document.addEventListener('keypress', e => {
			e.preventDefault();

			if (e.key !== 'Enter') return;
			this.realizaConta();
		});
	};

	this.pressionaDel = () => {
		document.addEventListener('keyup', e => {
			if (e.key !== 'Backspace') return;
			this.apagaUm();
		});
	};

	this.btnParaDisplay = valor => {
		this.display.value += valor.innerText;
		this.display.focus();
	};

	this.clearDisplay = () => {
		this.display.value = '';
	};

	this.apagaUm = () => {
		this.display.value = this.display.value.slice(0, -1);
	};

	this.realizaConta = () => {
		try {
			// eslint-disable-next-line no-eval
			const conta = eval(this.display.value);

			if (!conta) {
				alert('Conta inválida');
			}

			this.display.value = conta;
		} catch (e) {
			alert('Conta inválida');
		}
	};

	this.cliqueBotoes = () => {
		document.addEventListener('click', e => {
			const el = e.target;
			if (el.classList.contains('btn-num')) this.btnParaDisplay(el);
			if (el.classList.contains('btn-clear')) this.clearDisplay();
			if (el.classList.contains('btn-del')) this.apagaUm();
			if (el.classList.contains('btn-eq')) this.realizaConta();
		});
	};

	this.inicia = () => {
		this.cliqueBotoes();
		this.pressionaEnter();
		this.pressionaDel();
	};
}

const calculadora = new Calculadora();
calculadora.inicia();
