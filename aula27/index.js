// ? : Operador ternário 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuárion normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // sempre irá guardar a primeira condição verdadeira

console.log(nivelUsuario, corPadrao);
