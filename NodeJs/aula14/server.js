require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/middleware');

const app = express();

mongoose
	.connect(process.env.CONNECTIONSTRING)
	.then(() => {
		console.log('\nBase de Dados conectada.');
		app.emit('Pronto');
	})
	.catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('Pronto', () => {
	app.listen(3000, () => {
		console.log('\n🚀 Server is running on port 3000 🚀');
		console.log('🚀 Acessar http://localhost:3000 🚀\n');
	});
});
