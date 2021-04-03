//* (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUser = 1000;
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUser = 'Red';
const corDefault = corUser || 'Preto';

console.log(nivelUser, corDefault);

// if (pontuacaoUsuario >= 1000) {
// 	console.log('Usuário VIP');
// } else {
// 	console.log('Usuário Normal');
// }
