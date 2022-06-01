class ControleRemoto {
    constructor(tv) {
        this.tv=tv;
        this.volume = 0;
    }
    // metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    // metodo estatico
    // unica maneira de acessar é atraves da class
   static trocaPilha(){
       console.log('pilha trocada!');
    }
}

const controle1 = new ControleRemoto ('TV LG');
controle1.aumentarVolume(); // instancia.metodo
controle1.aumentarVolume();
ControleRemoto.trocaPilha(); // acessa atraves da class 
// controle1.trocaPilha(); // não funciona pois trocaPilha é estatico
console.log(controle1);