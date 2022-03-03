const texto = document.querySelector('#texto');

const data = new Date();
const diaSemana = data.getDay();
const diaDia = data.getDate();
const diaMes = data.getMonth();
const diaAno = data.getFullYear();



//select.innerrHTML += ` <p>Paragrafo inserido no hmtl</p>`

console.log(diaSemana);
console.log(diaDia);
console.log(diaMes);
console.log(diaAno);

function diaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-Feira';
        case 2:
            return diaSemanaTexto = 'Terça-Feira';
        case 3:
            return diaSemanaTexto = 'Quarta-Feira';
        case 4:
            return diaSemanaTexto = 'Quinta-Feira';
        case 5:
            return diaSemanaTexto = 'Sexta-Feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        case 6:
            return diaSemanaTexto = 'Domingo';
        default: diaSemanaTexto = '';
    }
}
function diaMesTexto (diaMes) {
    let diaMesTexto;
    switch (diaMes) {
        case 0:
            return diaMesTexto = 'Janeiro';
        case 1:
            return  diaMesTexto = 'Fevereira';
        case 2:
            return diaMesTexto = 'Março';
        case 3:
            return diaMesTexto = 'Abril';
        case 4:
            return diaMesTexto = 'Maio';
        case 5:
            return diaMesTexto = 'Junho';
        case 6:
            return diaMesTexto = 'Julho';
        case 7:
            return diaMesTexto = 'Agosto';
        case 8:
            return  diaMesTexto = 'Outubro';
        case 9:
            return diaMesTexto = 'Setembro';
        case 10:
            return diaMesTexto = 'Novembro';
        case 11:
            return diaMesTexto = 'Dezembro';
        default:
            return diaMesTexto = '';
    }
}