const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send(`
	<form action="/" method="POST">
	Nome do cliente: <input type="text" name="nome">
	<button>Olá Mundo!</button>
	</form>
	`);
});

app.post('/', (req, res) => {
	res.send('Recebi o formulário.');
});

app.get('/contato', (req, res) => {
	res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
	console.log('\n🚀 Acessar http://localhost:3000 🚀');
	console.log('🚀 Server is running on port 3000 🚀\n');
});
