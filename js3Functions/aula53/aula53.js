function retornaFuncao(nome) {
	return () => nome;
}

const funcao = retornaFuncao('Daniel');
const funcao2 = retornaFuncao('Fernanda');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
