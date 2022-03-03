function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moureira', 17);
const pessoa4 = criaPessoa('Junior', 'José', 28);
const pessoa5 = criaPessoa('Jean', 'Otavio', 22);


console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);
console.log(pessoa1.sobrenome, pessoa2.sobrenome, pessoa3.sobrenome, pessoa4.sobrenome, pessoa5.sobrenome);
console.log(pessoa1.idade, pessoa2.idade, pessoa3.idade, pessoa4.idade, pessoa5.idade);