const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
	console.log('\n🚀 Server is running on port 3000 🚀');
	console.log('🚀 Acessar http://localhost:3000 🚀\n');
});
