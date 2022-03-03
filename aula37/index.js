const nome = ['Luiz', 'Otávio', 'Henrique'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

for (let valor of pessoa) {
    
}


// For clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For  - Retorna o valor em si (interaveis, arrays ou strings)
/*
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('--------------');

for ( let i in nome) {
    console.log(nome[i]);
}

console.log('--------------');

for (let valor of nome) {
    console.log(valor);
}

console.log('--------------');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})*/