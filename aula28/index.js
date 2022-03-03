/*
const tresHoras = 60 * 60 * 3 * 1000; // três horas converdida em milecimos de segundos
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
*/
/*const data = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, m, s, mls

console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1)// Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sábado

console.log(data.toString());
*/
//console.log(Date.now());



function formataData (data) {
    const dia = new Date();
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);