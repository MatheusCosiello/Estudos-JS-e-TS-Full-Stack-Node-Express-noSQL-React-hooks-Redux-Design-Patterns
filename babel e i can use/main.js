const nome = 'Matheus';
const obj = {nome};
const novoObj ={...obj};
console.log(novoObj);

//------------------------------------
class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}