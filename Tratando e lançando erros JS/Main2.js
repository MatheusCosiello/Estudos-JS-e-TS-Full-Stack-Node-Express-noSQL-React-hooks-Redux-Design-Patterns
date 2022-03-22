function retornaHora (data){
 if (data && ! ( data instanceof Date)){    //veridicando se a instancia do parametro é diferente de Date
     throw new TypeError('esperando instancia de Date');
 }    
 if (!data) {
     data = new Date();
 }
    return data.toLocaleTimeString('pt-br', {});
}

try {

const datas = new Date ('01-01-1992 12:00:00'); // instancia de date aceita pela function
const hora =  retornaHora();
console.log(hora);
} catch (error) {
    // tratar erro aqui
   // console.log(error); exibi o erro
}
finally {
    console.log('tenha um bom dia');
}
