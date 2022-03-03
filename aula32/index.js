// Atribuição via desestruturação
//               0      1      2    3     4     5    6     7     8 index
/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, ,segundoNumero, , , ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(resto);

console.log(numeros);*/

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const [,[,,seis]] = numeros;
console.log(seis);