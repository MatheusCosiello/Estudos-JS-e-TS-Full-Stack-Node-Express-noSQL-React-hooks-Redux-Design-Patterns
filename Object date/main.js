/*
const tresHoras = 60 * 60 * 3 * 1000; // o js conta o tempo em milisegundos por padrao
const umDia = 60 * 60 * 24 * 1000; // um dia em Millisegundos
const data = new Date(0 + tresHoras + umDia); // timestamp Unix 01/01/1970 começa a contagem aqui
console.log(data.toString());

// a contagem dos meses sempre é feita a partir do 0
const data = new Date(2022 , 0 , 20, 14, 12, 30);  // ano , mes , dia , horas, minuto , segundo , Milisegundos

const data = new Date("2022-01-20 14:23:30"); // no metodo DateString o mes utiliza o numero real para representação ATENÇÃO AO FORMADO DA ESCRITA DA STRING
console.log(data.toString());

const data = new Date();
console.log("DIA",data.getDate());
console.log("mes",data.getMonth());
console.log("ano",data.getFullYear());
console.log("hora",data.getHours());
console.log("minuto",data.getMinutes());
console.log("Segundos",data.getSeconds());
console.log("MS",data.getMilliseconds());
console.log("DIA da semana",data.getDay()); // corresponde ao numero de dia da semana 0 domingo - 6 sabado
 */

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
};

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}---${hora}:${minuto}:${segundo}`;
}

const data = new Date();

const dataBrasil = formataData(data);
console.log(dataBrasil);