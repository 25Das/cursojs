// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);

//* ... rest, ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [um, , tres, , cinco, , sete, , nove] = numeros;

// console.log(um, tres, cinco, sete, nove);

const numeros = [
	[1, 2, 3], // 0 / 0, 1, 2
	[4, 5, 6], // 1 / 0, 1, 2
	[7, 8, 9], // 2 / 0, 1, 2
];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// const [, [, , seis]] = numeros;

// console.log(numeros[1][2]);
