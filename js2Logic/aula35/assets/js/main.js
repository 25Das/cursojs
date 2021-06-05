const elementos = [
{tag: 'p', texto: 'Frase 1'}, // 0
{tag: 'div', texto: 'Frase 2'}, // 1
{tag: 'section', texto: 'Frase 4'}, // 2
{tag: 'footer', texto: 'Frase 3'}, // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
	const { tag, texto} = elementos[i];
	const tagCriada = document.createElement(tag);
	const textoCriado = document.createTextNode(texto);

	tagCriada.appendChild(textoCriado);
	div.appendChild(tagCriada);
}

container.appendChild(div);
