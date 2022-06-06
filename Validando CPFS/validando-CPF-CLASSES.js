// 705.484.450-52 || 070.987.720-03

// valida o cpf
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });

    }

    éSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // validando sequencia de numeros
    }

    geraNovoCpf(){
         
    }

            // metodo de validação  do cpf
    valida() {
        if(!this.cpfLimpo) return false; //cpflimpo
        if(typeof this.cpfLimpo !== 'string') return false; //cpf é string
        if(this.cpfLimpo.length !== 11) return false; // valida 11 digitos
        if(this.éSequencia()) return false; // veirfica sé é sequencia
        if(this.geraNovoCpf()) return false // verifica se gerou novo cpf
        return 'teste';
    };
}

const CPF1 = new ValidaCPF('070.987.720-03');
console.log(CPF1.valida());