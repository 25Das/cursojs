/* const _Velocidade = Symbol('velocidade');
class Carro {
	constructor(nome, velocidade) {
		this.nome = nome;
		this[_Velocidade] = 55;
	}

	set velocidade(valor) {
		console.log('SETTER');
		if (typeof valor !== 'number') return;
		if(valor >= 100 || valor <= 0) return;

		this[_Velocidade] = valor;
	}

	get velocidade() {
		console.log('GETTER');
		return this[_Velocidade];
	}

	acelerar() {
		if (this[_Velocidade] >= 100) return;
		this[_Velocidade] += 1;
	}

	frear() {
		if (this[_Velocidade] <= 100) return;
		this[_Velocidade] -= 1;
	}
}

const c1 = new Carro('Fusca');

// for (let i = 0; i < 200; i++) {
// 	c1.acelerar();
// }

c1.velocidade = 99;

console.log(c1.velocidade);
 */

class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	get nomeCompleto() {
		return this.nome + ' ' + this.sobrenome;
	}

	set nomeCompleto(value) {
		let valor = value.split(' ');
		this.nome = valor.shift();
		this.sobrenome = valor.join(' ');
	}
}

const p1 = new Pessoa('Daniel', 'Silva');
p1.nomeCompleto = 'Daniel Alves da Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
