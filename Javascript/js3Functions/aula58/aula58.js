function Pessoa(nome, sobrenome) {
	// Private
	const ID = 123456;
	const metodoInterno = () => {
		console.log('Método Privado');
	};

	// Public
	this.nome = nome;
	this.sobrenome = sobrenome;

	this.metodo = () => console.log(`${this.nome}: Sou um método`);
}

const p1 = new Pessoa('Daniel', 'Silva');
const p2 = new Pessoa('Fernanda', 'Santos');

p1.metodo();
p2.metodo();
