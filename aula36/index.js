/*const fruntas = ['pera', 'maçã', 'uva'];

for (let indice in fruntas){
    console.log(fruntas[indice]);
}

for (let i = 0; i < fruntas.length; i++) {
    console.log(fruntas[i]);
}
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

for ( let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}