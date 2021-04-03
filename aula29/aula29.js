const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();

function getDiaSemanaTexto(dia) {
	let diaSemanaTexto;

	switch (dia) {
		case 0:
			diaSemanaTexto = 'Domingo';
			return diaSemanaTexto;
		// break;
		case 1:
			diaSemanaTexto = 'Segunda';
			return diaSemanaTexto;
		// break;
		case 2:
			diaSemanaTexto = 'Terça';
			return diaSemanaTexto;
		// break;
		case 3:
			diaSemanaTexto = 'Quarta';
			return diaSemanaTexto;
		// break;
		case 4:
			diaSemanaTexto = 'Quinta';
			return diaSemanaTexto;
		// break;
		case 5:
			diaSemanaTexto = 'Sexta';
			return diaSemanaTexto;
		// break;
		case 6:
			diaSemanaTexto = 'Sábado';
			return diaSemanaTexto;
		// break;
		default:
			diaSemanaTexto = 'Dia inválido';
			return diaSemanaTexto;
		// break;
	}

	// return diaSemanaTexto;
}
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

//*
// if (diaSemana === 0) {
// 	diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
// 	diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
// 	diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
// 	diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
// 	diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
// 	diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
// 	diaSemanaTexto = 'Sábado';
// } else {
// 	diaSemanaTexto = 'Dia inválido';
// }
