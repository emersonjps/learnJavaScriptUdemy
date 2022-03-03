/*
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toString();

function getDiaSemanaTexto ( diaSemana ) {
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'quarta-feira';
        return diaSemanaTexto; 
    case 4:
        diaSemanaTexto = 'quinta-feira';
        return diaSemanaTexto; 
    case 5:
        diaSemanaTexto = 'sexta-feira';
        return diaSemanaTexto; 
    case 6:
        diaSemanaTexto = 'sábado';
        return diaSemanaTexto; 
    default: 
        diaSemanaTexto = '';
        return diaSemanaTexto;
}
}

function getNomeMes (numeroMes) {
    let diaMesTexto;
    switch (numeroMes) {
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

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}`+
        ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        );
}

h1.innerHTML = criaData(data);
*/
/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dataStyle: 'full', timeStyle: 'short'});
*/