const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;// inserir um valor em um documento html existente.
//texto.innerHTML = `<p>Seu numero + 2 é ${numero + 2}</p>`

const raizQuadrada = Math.pow(document.getElementById('raizQuadrada'));
const inteiro = document.getElementById('inteiro');
const seNan = document.getElementById('seNan');
const arredondarMenos = document.getElementById('arredondarMenos');
const arredondarMais = Math.ceil(document.getElementById('arredondarMais'));
const formatoDuasCasas = document.getElementById('formatoDuasCasas');

