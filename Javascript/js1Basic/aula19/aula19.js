/**
 * *Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) - Valores copiados
 *
 * *Referência (mutável) - array, object, function - Passados por referência
 */

//*
// let a = 'A';
// const b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

//*
// const nome = 'Daniel';
// nome[0] = 'F'; // Não faz nada
// console.log(nome[0], nome);

//*
// const a = [1, 2, 3];
// const b = [...a]; // Referência
// const c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Daniel');
// console.log(a, c);

//*
// const a = {
// 	nome: 'Daniel',
// 	sobrenome: 'Silva',
// };
// const b = { ...a };

// a.nome = 'Fernanda';
// console.log(a);
// console.log(b);
