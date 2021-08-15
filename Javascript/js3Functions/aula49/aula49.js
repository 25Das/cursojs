// Function Hoisting
falaOi();
function falaOi() {
	console.log('Oi');
}

// First-class objects
// Function expression
const souUmDado = () => {
	console.log('Sou um dado.');
};

function executaFuncao(funcao) {
	console.log('Vou executar sua função abaixo.');
	funcao();
}
executaFuncao(souUmDado);

// Arrow Function
const arrowFunction = () => {
	console.log('Sou uma Arrow Function');
};
arrowFunction();

// Dentro de um objeto
const obj = {
	falar() {
		console.log('Estou falando...');
	},
};
obj.falar();
