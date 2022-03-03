nome = 'Emerson'; // Não faça isso, será gerado uma váriavel no escopo GLOBAL
var numero = 1;
var numero = 2; // var pode ser redeclarado e funionara normalmente
console.log(numero);

let numero2 = 1;// Gera um erro.
let numero2 = 2;// let não pode ser declarado novamente, esse erro foi corrigido no ECMAscript 2015 (ES6)
console.log(numero2); 