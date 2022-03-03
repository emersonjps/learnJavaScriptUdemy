/*
OPERADORES LÓGICOS
&& -> AND -> E -> todas as exoressões precisam ser verdadeira para retornar true
|| -> OR -> OU  -> basta uma condição ser true para tudo ser true
!  -> NOT -> NÃO
*/

const expressaoAnd = true && true && false;
const expressaoOr = true || false;
const expressaoNot = !false;
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);

const usuario = 'Luiz';
const senha = '123456';

const vailogar = usuario === 'Luiz' && senha === '123456';
console.log(vailogar);