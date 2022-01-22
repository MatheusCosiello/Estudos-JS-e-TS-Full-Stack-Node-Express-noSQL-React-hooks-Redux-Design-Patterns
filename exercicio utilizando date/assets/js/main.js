// dia da semana texto, dia-mes-ano-hora


//codigo criado utilizando meu conhecimento adquirido ate aqui.

const data = new Date();

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
};

const day = zeroAEsquerda(data.getDate());                 //dia
const dayOfWeek = data.getDay();                           //dia da semana
const month = data.getMonth();                             //mes
const year = zeroAEsquerda(data.getFullYear());            //ano
const hour = zeroAEsquerda(data.getHours());               //hora
const minute = zeroAEsquerda(data.getMinutes());           //minuto

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

const h1 = document.querySelector("#h1-text");

h1.innerHTML = `${dayOfWeekText} | ${day} de ${monthText} de ${year} | ${hour}:${minute}`;
 


// Para objeto Date podemos utlizilar algumas automoções do proprio JS 
// codigo utilizando automação do propria do js 

/*
const h1 = document.querySelector('.h1class');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle : 'full', timeStyle : 'short'});
*/