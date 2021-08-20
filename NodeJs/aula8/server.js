const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(`
	<form action="/" method="POST">
	Nome do cliente: <input type="text" name="qualquercoisa"><br>
	Outro campo: <input type="text" name="aquioutrocampo">
	<button>Olá Mundo!</button>
	</form>
	`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send(req.query.facebookProfile);
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send(`O que você enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
	console.log('\n🚀 Server is running on port 3000 🚀');
	console.log('🚀 Acessar http://localhost:3000 🚀\n');
});

// req.params >> .../profiles/3
// req.query >> .../profiles/?chave1=valor1&chave2=valor2&chave3=valor3
