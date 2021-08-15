// Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,

		// Getter
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},

		// Setter
		set nomeCompleto(valor) {
			let nomeSobrenome = valor;

			nomeSobrenome = valor.split(' ');
			this.nome = nomeSobrenome.shift();
			this.sobrenome = nomeSobrenome.join(' ');
		},

		fala(assunto = 'falando sobre mim <3') {
			return `${this.nome} está ${assunto}.`;
		},

		altura,
		peso,

		// Getter
		get imc() {
			const indice = this.peso / this.altura ** 2;
			return indice.toFixed(2);
		},
	};
}

const p1 = criaPessoa('Daniel', 'Silva', 1.83, 84);
const p2 = criaPessoa('Fernanda', 'Almeida', 1.53, 44);
const p3 = criaPessoa('Riven', 'Silva', 0.53, 4);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
