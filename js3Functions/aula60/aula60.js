function recursiva(max) {
	let cont = max;

	console.log(cont);

	if (cont >= 11295) return;

	cont += 1;

	recursiva(cont);
}

recursiva(0);
