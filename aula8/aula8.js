/**
 * Daniel Alves da Silva tem 24 anos, pesa 84kg
 * tem 1.83 de altura e seu IMC é de ...
 * Daniel nasceu em 1996
 */
const nome = 'Daniel';
const sobrenome = 'Silva';
const idade = 24;
const peso = 84;
const alturaEmM = 1.83;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg.');
console.log('Tem', alturaEmM, 'm de altura e seu IMC é de', imc, '.');
console.log(nome, 'nasceu em', anoNascimento, '.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.`);
console.log(`Tem ${alturaEmM}m de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
