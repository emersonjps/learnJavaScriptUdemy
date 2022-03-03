//Tipos de dados primitivos 

const nome = "Luiz"; // string
const nome1 = 'Luiz';// string
const nome2 = `Luiz`;// string

const num1 = 10; //number
const num2 = 10.552; //number

let nomeAluno; // undefined = não aponta pra local nenhum na mémoria.
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na mémoria.

const boolean = true; // tipo lógico.
const boolean1 = false;// váriavel com tuas condições possíveis Verdadeiro ou falso.

const a = [1, 2];// arrays
const b = a; // b fica com o mesmo endereço lógico na mémoria, sendo assim se b for alterado automaticamente "a" também ira ser

b.push(3);
console.log(a, b);


/*
console,console.log(typeof nome, nome);
console,console.log(typeof nome1, nome1);
console,console.log(typeof nome2, nome2);
console,console.log(typeof  num1, num1);
console,console.log(typeof num2, num2);
console,console.log(typeof nomeAluno, nomeAluno);
console,console.log(typeof sobrenomeAluno, sobrenomeAluno);
console,console.log(typeof boolean, boolean);
console,console.log(typeof boolean1, boolean1);
*/