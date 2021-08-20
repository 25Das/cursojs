const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
	console.log('\n🚀 Server is running on port 3000 🚀');
	console.log('🚀 Acessar http://localhost:3000 🚀\n');
});
