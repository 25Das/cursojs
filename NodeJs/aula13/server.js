const express = require('express');
const path = require('path');

const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/middleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
	console.log('\n🚀 Server is running on port 3000 🚀');
	console.log('🚀 Acessar http://localhost:3000 🚀\n');
});