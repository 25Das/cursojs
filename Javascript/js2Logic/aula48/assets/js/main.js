const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
	const li = document.createElement('li');
	return li;
}

function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}

function criaBotaoApagar(li) {
	const apagar = li;
	apagar.innerText += ' ';
	const botaoApagar = document.createElement('button');
	botaoApagar.innerText = 'Apagar';
	// botaoApagar.classList.add('Apagar');
	botaoApagar.setAttribute('class', 'apagar');
	botaoApagar.setAttribute('title', 'Apagar esta tarefa');
	apagar.appendChild(botaoApagar);
}

function salvarTarefas() {
	const liTarefas = tarefas.querySelectorAll('li');
	const listaDeTarefas = [];

	for (const tarefa of liTarefas) {
		let tarefaTexto = tarefa.innerText;
		tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
		listaDeTarefas.push(tarefaTexto);
	}

	const tarefasJSON = JSON.stringify(listaDeTarefas);
	localStorage.setItem('tarefas', tarefasJSON);
}

function criaTarefa(textoInput) {
	const li = criaLi();
	li.innerText = textoInput;
	tarefas.appendChild(li);
	limpaInput();
	criaBotaoApagar(li);
	salvarTarefas();
}

function adicionaTarefasSalvas() {
	const tarefasSalvas = localStorage.getItem('tarefas');
	const listaDeTarefas = JSON.parse(tarefasSalvas);

	for (const tarefa of listaDeTarefas) {
		criaTarefa(tarefa);
	}
}

inputTarefa.addEventListener('keypress', e => {
	if (e.keyCode === 13) {
		if (!inputTarefa.value) return;
		criaTarefa(inputTarefa.value);
	}
});

btnTarefa.addEventListener('click', () => {
	if (!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
});

document.addEventListener('click', e => {
	const el = e.target;

	if (el.classList.contains('apagar')) {
		el.parentElement.remove();
		salvarTarefas();
	}
});

adicionaTarefasSalvas();
