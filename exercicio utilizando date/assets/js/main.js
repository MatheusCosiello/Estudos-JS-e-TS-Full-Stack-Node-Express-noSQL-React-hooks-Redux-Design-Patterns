// dia da semana texto, dia-mes-ano-hora

const data = new Date();


const day = data.getDate();                 //dia
const dayOfWeek = data.getDay();            //dia da semana
const month = data.getMonth();              //mes
const year = data.getFullYear();            //ano
const hour = data.getHours();               //hora
const minute = data.getMinutes();           //minuto

let dayOfWeekText;                          //texto dia da semana
let monthText;                              //texto mes

switch (dayOfWeek) {                        // swtich-case texto dia da semana
    case 0 :
        dayOfWeekText = "Domingo";
    break;
    case 1 :
        dayOfWeekText = "Segunda";
    break;
    case 2 :
        dayOfWeekText = "Terça";
    break;
    case 3 :
        dayOfWeekText = "Quarta";
    break;
    case 4 :
        dayOfWeekText = "Quinta";
    break;
    case 5 :
        dayOfWeekText = "Sexta";
    break;
    case 6 :
        dayOfWeekText = "Sabado";
    break;
};

switch (month) {                             // swtich-case texto Mes
    case 0 :
        monthText = "Janeiro";
    break;
    case 1 :
        monthText = "Fevereiro";
    break;
    case 2 :
        monthText = "Março";
    break;
    case 3 :
        monthText = "Abril";
    break;
    case 4 :
        monthText = "Maio";
    break;
    case 5 :
        monthText = "Junho";
    break;
    case 6 :
        monthText = "Julho";
    break;
    case 7 :
        monthText = "agosto";
    break;
    case 8 :
        monthText = "Setembro";
    break;
    case 9 :
        monthText = "Outubro";
    break;
    case 10 :
        monthText = "Novembro";
    break;
    case 11 :
        monthText = "Dezembro";
    break;
}
let Header = `${dayOfWeekText},${day} de ${monthText} de ${year} Hora:${hour}:${minute}` ;



console.log(Header);




