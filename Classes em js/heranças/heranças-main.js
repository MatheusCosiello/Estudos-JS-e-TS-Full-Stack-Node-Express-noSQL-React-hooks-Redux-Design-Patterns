class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if (this.ligado){
            console.log(`${this.nome} está ligado`);
            return;
        } 
        this.ligado = true;
    }
    Desligar(){
        if (!this.ligado) {
            console.log(`${this.nome} está desligado`);
            return;
        }   
        this.ligado = false;
    }
}

// extends faz com que a classe criada SmartPhone hernde tudo da classes DispositivoEletonico
// sempre que criar um extens é necessario fazer a chamada do super() = superclass
class SmartPhone extends DispositivoEletronico {
    constructor(nome,cor,modelo){
        super(nome); // superclasse trazendo nome
        this.cor = cor;
        this.modelo = modelo;
    }
}

const iPhone = new SmartPhone('iphone','preto','15');
iPhone.ligar();
console.log(iPhone);

