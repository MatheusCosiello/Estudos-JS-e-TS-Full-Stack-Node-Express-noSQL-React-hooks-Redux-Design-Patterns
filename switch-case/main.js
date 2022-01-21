const data = new Date('1992-06-15 00:00:00');
const diaDaSemana = data.getDay();
let diaDaSemanaTexto;

// podemos fazer essa mesma repetição utilizando switch/case

if (diaDaSemana == 0) { diaDaSemanaTexto = "domingo" }

else if (diaDaSemana == 1) { diaDaSemanaTexto = "Segunda" }

else if (diaDaSemana == 2) { diaDaSemanaTexto = "Terça" }

else if (diaDaSemana == 3) { diaDaSemanaTexto = "Quarta" }

else if (diaDaSemana == 4) { diaDaSemanaTexto = "Quinta" }

else if (diaDaSemana == 5) { diaDaSemanaTexto = "Sexta" }

else if (diaDaSemana == 6) { diaDaSemanaTexto = "Sabado" }

else (diaDaSemana >= 7)
{ diaDaSemanaTexto = "Não esta dentro do padrao de datas" }

//------------------------------------------

// exemplo de repetiçao com switch

switch (diaDaSemana) {
    case 0:
        diaDaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaDaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaDaSemanaTexto = 'Terça';
        break;
    case 3:
        diaDaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaDaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaDaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaDaSemanaTexto = 'Sabado';
        break;

    default:
        diaDaSemanaTexto = "";
}

// tambem podemos utilizar  o case dentro de um function, sendo asism podemo eliminar os "breaks" e utilizar um return

function getDayWeekText(diaDaSemana) {

    let weekDayText;

    switch (diaDaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return weekDayText
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return weekDayText
        case 2:
            diaDaSemanaTexto = 'Terça';
            return weekDayText
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return weekDayText
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return weekDayText
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return weekDayText
        case 6:
            diaDaSemanaTexto = 'Sabado';
            return weekDayText
        default:
            diaDaSemanaTexto = ""
    }

}

console.log(diaDaSemana, diaDaSemanaTexto);