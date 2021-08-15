/* eslint-disable no-restricted-syntax */
class ValidaFormulario {
	constructor() {
		this.formulario = document.querySelector('.formulario');

		this.eventos();
	}

	eventos() {
		this.formulario.addEventListener('submit', e => {
			this.handleSubmit(e);
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const camposValidos = this.camposSaoValidos();
		const senhasValidas = this.senhasSaoValidas();

		if (camposValidos && senhasValidas) {
			alert('Formulário enviado.');
			this.formulario.submit();
		}
	}

	senhasSaoValidas() {
		let valid = true;

		const senha = this.formulario.querySelector('.senha');
		const repetirSenha = this.formulario.querySelector('.repetir-senha');

		if (senha.value.length < 6 || senha.value.length > 12) {
			valid = false;

			ValidaFormulario.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres');
			ValidaFormulario.createError(
				repetirSenha,
				'Senha precisa estar entre 6 e 12 caracteres',
			);
		}

		if (senha.value !== repetirSenha.value) {
			valid = false;

			ValidaFormulario.createError(senha, 'Campos senha e repetir senha precisam ser iguais');
			ValidaFormulario.createError(
				repetirSenha,
				'Campos senha e repetir senha precisam ser iguais',
			);
		}

		return valid;
	}

	camposSaoValidos() {
		let valid = true;

		for (const errorText of this.formulario.querySelectorAll('.error-text')) {
			errorText.remove();
		}

		for (const campo of this.formulario.querySelectorAll('.validar')) {
			const label = campo.previousElementSibling.innerText;

			if (!campo.value) {
				ValidaFormulario.createError(campo, `Campo "${label}" não pode estar em branco.`);
				valid = false;
			}

			if (campo.classList.contains('cpf')) {
				if (!ValidaFormulario.validateCPF(campo)) valid = false;
			}

			if (campo.classList.contains('usuario')) {
				if (!ValidaFormulario.validateUsuario(campo)) valid = false;
			}
		}

		return valid;
	}

	static validateUsuario(campo) {
		const usuario = campo.value;
		let valid = true;

		if (usuario.length < 3 || usuario.length > 12) {
			ValidaFormulario.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
			valid = false;
		}

		if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
			ValidaFormulario.createError(
				campo,
				'Usuário precisa conter apenas letras e/ou números',
			);
			valid = false;
		}

		return valid;
	}

	static validateCPF(campo) {
		const cpf = new ValidaCPF(campo.value);

		if (!cpf.valida()) {
			ValidaFormulario.createError(campo, 'CPF Inválido');
			return false;
		}

		return true;
	}

	static createError(campo, msg) {
		const div = document.createElement('div');
		div.innerHTML = msg;
		div.classList.add('error-text');

		campo.insertAdjacentElement('beforebegin', div);
	}
}

const valida = new ValidaFormulario();
