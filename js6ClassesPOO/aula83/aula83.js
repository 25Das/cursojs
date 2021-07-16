/* eslint-disable max-classes-per-file */
class DispositivoEletronico {
	constructor(nome) {
		this.nome = nome;
		this.ligado = false;
	}

	ligar() {
		if (this.ligado) {
			console.log(`${this.nome} já ligado`);
			return;
		}

		this.ligado = true;
	}

	desligar() {
		if (!this.ligado) {
			console.log(`${this.nome} já desligado`);
			return;
		}

		this.ligado = false;
	}
}

class Smartphone extends DispositivoEletronico {
	constructor(nome, cor, modelo) {
		super(nome);
		this.cor = cor;
		this.modelo = modelo;
	}
}

class Tablet extends DispositivoEletronico {
	constructor(nome, temWIfi) {
		super(nome);
		this.temWIfi = temWIfi;
	}

	ligar() {
		console.log(`${this.nome}: Olha, você alterou o método ligar...`);
	}

	falaOi() {
		console.log(`${this.nome}: Oi!`);
	}
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falaOi();
