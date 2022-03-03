/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg 
tem 1.8 de altura e seu IMc é de 25,92592592592524
Luiz Otávio nasceu em 1980
*/

const nome = "Luiz Otávio";
const sobrenome = "miranda";
const idade = 30;
const alturaEmM = 1.80;
const peso = 84;
let imc;
let anoNascimento;

anoNascimento = 2022 - 1980;
imc = peso / (alturaEmM * alturaEmM); // peso / altura * altura

console.log(nome+ " " +sobrenome+ " tem " +anoNascimento+ " anos, pesa "+peso+ " kg");
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${2022 - anoNascimento}`);