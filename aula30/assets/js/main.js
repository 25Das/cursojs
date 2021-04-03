//* Modo 1
/* const dataCompleta = document.querySelector('.horario');
const data = new Date();

function getDiaNome(dia) {
	let diaNome;

	switch (dia) {
		case 0:
			diaNome = 'Domingo';
			return diaNome;
		case 1:
			diaNome = 'Segunda-feira';
			return diaNome;
		case 2:
			diaNome = 'Terça-feira';
			return diaNome;
		case 3:
			diaNome = 'Quarta-feira';
			return diaNome;
		case 4:
			diaNome = 'Quinta-feira';
			return diaNome;
		case 5:
			diaNome = 'Sexta-feira';
			return diaNome;
		case 6:
			diaNome = 'Sábado';
			return diaNome;
		default:
			diaNome = 'Dia Inválido';
			return diaNome;
	}
}
function getMesNome(mes) {
	let mesNome;

	switch (mes) {
		case 0:
			mesNome = 'janeiro';
			return mesNome;
		case 1:
			mesNome = 'fevereiro';
			return mesNome;
		case 2:
			mesNome = 'março';
			return mesNome;
		case 3:
			mesNome = 'abril';
			return mesNome;
		case 4:
			mesNome = 'maio';
			return mesNome;
		case 5:
			mesNome = 'junho';
			return mesNome;
		case 6:
			mesNome = 'julho';
			return mesNome;
		case 7:
			mesNome = 'agosto';
			return mesNome;
		case 8:
			mesNome = 'setembro';
			return mesNome;
		case 9:
			mesNome = 'outubro';
			return mesNome;
		case 10:
			mesNome = 'novembro';
			return mesNome;
		case 11:
			mesNome = 'dezembro';
			return mesNome;
		default:
			mesNome = 'Mês Inválido';
			return mesNome;
	}
}

function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function criaData() {
	const dataDiaSemana = data.getDay();
	const dataDiaMes = data.getDate();
	const dataMes = data.getMonth();
	const dataAno = data.getFullYear();
	const dataHoras = data.getHours();
	const dataMinutos = data.getMinutes();

	const diaSemanaNome = getDiaNome(dataDiaSemana);
	const diaMesNome = getMesNome(dataMes);

	return (
		`${diaSemanaNome}, ${dataDiaMes} de ${diaMesNome} de ${dataAno} ` +
		`${zeroAEsquerda(dataHoras)}:${zeroAEsquerda(dataMinutos)}`
	);
}

dataCompleta.innerHTML = criaData(data); */

//* Modo 2
/* const dataCompleta = document.querySelector('.horario');
const data = new Date();
// const opcoes = {
// 	dateStyle: 'full',
// 	timeStyle: 'short',
// };

dataCompleta.innerHTML = data.toLocaleString('pt-BR', {
	dateStyle: 'full',
	timeStyle: 'medium',
}); */

//* Modo 3
const dataCompleta = document.querySelector('.horario');
const data = new Date();

function getDiaNome(dia) {
	const dias = [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado',
	];
	return dias[dia];
}

function getMesNome(mes) {
	const meses = [
		'janeiro',
		'fevereiro',
		'março',
		'abril',
		'maio',
		'junho',
		'julho',
		'agosto',
		'setembro',
		'outubro',
		'novembro',
		'dezembro',
	];

	return meses[mes];
}

function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function criaData() {
	const dataDiaSemana = data.getDay();
	const dataDiaMes = data.getDate();
	const dataMes = data.getMonth();
	const dataAno = data.getFullYear();
	const dataHoras = data.getHours();
	const dataMinutos = data.getMinutes();

	const diaSemanaNome = getDiaNome(dataDiaSemana);
	const diaMesNome = getMesNome(dataMes);

	return (
		`${diaSemanaNome}, ${dataDiaMes} de ${diaMesNome} de ${dataAno} ` +
		`${zeroAEsquerda(dataHoras)}:${zeroAEsquerda(dataMinutos)}`
	);
}

dataCompleta.innerHTML = criaData(data);
