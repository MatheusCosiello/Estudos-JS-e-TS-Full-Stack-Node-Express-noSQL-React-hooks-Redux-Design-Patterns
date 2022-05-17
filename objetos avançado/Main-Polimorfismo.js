// Construtora / POO CLasse MAE ou SUper CLasse
function Conta(agencia, conta, saldo){
this.agencia = agencia;
this.conta = conta;
this.saldo = saldo;

}

// metodos genericos de contas bancarias
// sacar depositar ver saldo

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor) {
        console.log(`saldo insuficiente, R$${this.saldo}`);
        this.verSaldo();
        return
    };
    this.saldo -= valor;
    this.verSaldo();
};


Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};


Conta.prototype.verSaldo = function(){
    console.log(`Ag/c..:${this.agencia}/${this.conta}| Saldo:R$ ${this.saldo.toFixed(2)}`);
};


// CC pode ficar negativo, poupança não
// herança
// conta corrente
function CC(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo); // herança de Conta
    this.limite = limite; // caracteristica propria
}
//linkando proto
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// sobreescrevendo sacar para personalizar sacar de CC
CC.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)) {
        console.log(`saldo insuficiente, R$${this.saldo}`);
        this.verSaldo();
        return
    };
    this.saldo -= valor;
    this.verSaldo();
};

const contaCC = new CC(11,22,150,250);
console.log(contaCC);
contaCC.depositar(10);

// polimorfismo CP conta poupanças

function CP(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo); // herança de Conta
}
//linkando proto
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

// sobreescrevendo sacar para personalizar sacar de CC
CP.prototype.sacar = function(valor){
    if (this.saldo < valor) {
        console.log(`saldo insuficiente, R$${this.saldo}`);
        this.verSaldo();
        return
    };
    this.saldo -= valor;
    this.verSaldo();
};
console.log('#######################################');
const contaCP = new CP(11,22,150);
console.log(contaCP);
contaCP.depositar(10);
contaCP.sacar(160);
contaCP.sacar(1);

// CLASS pai base do obj
// CLASS filhos se comportam cada um de sua maneira propria POLIMORFISMO