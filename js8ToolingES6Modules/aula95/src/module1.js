export const nome = 'Daniel';
export const sobrenome = 'Silva';
export const idade = 24;

export function soma(x, y) {
	return x + y;
}

export default class Pessoa {
	constructor(n, s) {
		this.nome = n;
		this.sobrenome = s;
	}
}
